import React, { createContext, FC, useCallback, useEffect, useState } from 'react';
import PlaybackStatus from '../../types/PlaybackStatus';
import { Sound } from 'expo-av/build/Audio/Sound';
import { Audio } from 'expo-av';

const FORWARD_AND_REWIND_MS = 10000;

export const AudioPlayerContext = createContext<IAudioPlayerContext>({
    playbackStatus: null,
    shouldPlayOnRelease: false,
    onPlayPausePress: () => {},
    fastForward: () => {},
    rewind: () => {},
    reset: () => {},
    stop: () => {},
    onSlidingStart: (value: number) => {},
    onSlidingComplete: (value: number) => {},
    setMp3: (mp3: string) => {},
});

interface IAudioPlayerContext {
    playbackStatus: PlaybackStatus | null;
    shouldPlayOnRelease: boolean;
    onPlayPausePress: () => any;
    fastForward: () => any;
    rewind: () => any;
    reset: () => any;
    stop: () => any;
    onSlidingStart: (value: number) => void;
    onSlidingComplete: (value: number) => void;
    setMp3: (mp3: string) => void;
}

const AudioPlayerProvider: FC = ({ children }) => {
    const [playbackStatus, setPlaybackStatus] = useState<PlaybackStatus | null>(null);
    const [sound, setSound] = useState<Sound | null>(null);
    const [shouldPlayOnRelease, setShouldPlayOnRelease] = useState(false);
    const [mp3, setMp3] = useState<null | string>(null);

    useEffect(() => {
        if (mp3) {
            const init = async () => {
                const { sound, status } = await Audio.Sound.createAsync(
                    { uri: mp3 },
                    { shouldPlay: true },
                    playbackStatus => setPlaybackStatus(playbackStatus as PlaybackStatus),
                    false
                );
                setSound(sound);
                setPlaybackStatus(status as PlaybackStatus);
            };
            init();
        }
    }, [mp3]);

    const onPlayPausePress = useCallback(async () => {
        if (sound && playbackStatus) {
            if (playbackStatus?.isPlaying) {
                setShouldPlayOnRelease(false);
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
        }
    }, [sound, playbackStatus]);

    const fastForward = useCallback(
        () => sound?.setPositionAsync((playbackStatus?.positionMillis || 0) + FORWARD_AND_REWIND_MS),
        [sound?.setPositionAsync, playbackStatus?.positionMillis, FORWARD_AND_REWIND_MS]
    );
    const rewind = useCallback(
        () => sound?.setPositionAsync((playbackStatus?.positionMillis || 0) - FORWARD_AND_REWIND_MS),
        [sound?.setPositionAsync, playbackStatus?.positionMillis, FORWARD_AND_REWIND_MS]
    );
    const reset = useCallback(() => sound?.setPositionAsync(0), [sound?.setPositionAsync]);
    const stop = useCallback(() => sound?.stopAsync(), [sound?.stopAsync]);

    const onSlidingStart = useCallback(
        (value: number) => {
            sound?.setPositionAsync(value);
            if (playbackStatus?.isPlaying) {
                sound?.pauseAsync();
                setShouldPlayOnRelease(true);
            } else {
                setShouldPlayOnRelease(false);
            }
        },
        [playbackStatus?.isPlaying, sound?.pauseAsync, setShouldPlayOnRelease]
    );

    const onSlidingComplete = useCallback(
        (value: number) => {
            sound?.setPositionAsync(value);
            if (shouldPlayOnRelease) sound?.playAsync();
        },
        [sound?.setPositionAsync, shouldPlayOnRelease, sound?.playAsync]
    );

    return (
        <AudioPlayerContext.Provider
            value={{
                playbackStatus,
                shouldPlayOnRelease,
                onPlayPausePress,
                fastForward,
                rewind,
                reset,
                stop,
                onSlidingStart,
                onSlidingComplete,
                setMp3,
            }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
};

export default AudioPlayerProvider;
