import { useCallback, useEffect, useState } from 'react';
import PlaybackStatus from '../types/PlaybackStatus';
import { Sound } from 'expo-av/build/Audio/Sound';
import { Audio } from 'expo-av';

const useAudioPlayer = (mp3: string, forwardRewindMs: number) => {
    const [playbackStatus, setPlaybackStatus] = useState<PlaybackStatus | null>(null);
    const [sound, setSound] = useState<Sound | null>(null);
    const [shouldPlayOnRelease, setShouldPlayOnRelease] = useState(false);

    useEffect(() => {
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
    }, []);

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

    const fastForward = useCallback(async () => {
        await sound?.setPositionAsync((playbackStatus?.positionMillis || 0) + forwardRewindMs);
    }, [sound?.setPositionAsync, playbackStatus?.positionMillis, forwardRewindMs]);
    const rewind = useCallback(async () => {
        await sound?.setPositionAsync((playbackStatus?.positionMillis || 0) - forwardRewindMs);
    }, [sound?.setPositionAsync, playbackStatus?.positionMillis, forwardRewindMs]);

    const onSlidingStart = useCallback(
        value => {
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
        value => {
            sound?.setPositionAsync(value);
            if (shouldPlayOnRelease) sound?.playAsync();
        },
        [sound?.setPositionAsync, shouldPlayOnRelease, sound?.playAsync]
    );

    return {
        playbackStatus,
        shouldPlayOnRelease,
        onPlayPausePress,
        fastForward,
        rewind,
        onSlidingStart,
        onSlidingComplete,
    };
};

export default useAudioPlayer;
