import React, { FC, useEffect } from 'react';

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { useTheme } from '../../constants/Theme';
import TimeCode from './TimeCode';

const AudioPlayer: FC<AudioPlayerProps> = ({ mp3, style }) => {
    const theme = useTheme();
    const {
        playbackStatus,
        shouldPlayOnRelease,
        onPlayPausePress,
        fastForward,
        rewind,
        onSlidingStart,
        onSlidingComplete,
        setMp3,
    } = useAudioPlayer();

    useEffect(() => {
        setMp3(mp3);
    }, [mp3]);

    return (
        <View style={[styles.root, style]}>
            <View>
                <TimeCode
                    current={playbackStatus?.positionMillis}
                    max={playbackStatus?.durationMillis}
                    style={styles.timeCode}
                />
                <View style={styles.slider}>
                    <Slider
                        minimumValue={0}
                        maximumValue={playbackStatus?.durationMillis || 1000}
                        value={playbackStatus?.positionMillis || 0}
                        onSlidingStart={onSlidingStart}
                        onSlidingComplete={onSlidingComplete}
                        minimumTrackTintColor={theme.colors.iconFocused}
                        maximumTrackTintColor={theme.colors.slider}
                        thumbTintColor={theme.colors.primary}
                        style={styles.slider}
                    />
                </View>
            </View>
            <View style={styles.controls}>
                <IconButton icon='rewind-10' onPress={rewind} color={theme.colors.audioPlayerControl} size={32} />
                <IconButton
                    icon={playbackStatus?.isPlaying || shouldPlayOnRelease ? 'pause' : 'play'}
                    onPress={onPlayPausePress}
                    color={theme.colors.audioPlayerControl}
                    size={50}
                />
                <IconButton
                    icon='fast-forward-10'
                    onPress={fastForward}
                    color={theme.colors.audioPlayerControl}
                    size={32}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        margin: 10,
    },
    timeCode: {
        marginTop: 5,
        top: 80,
        marginBottom: 12,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 35,
    },
    slider: {
        top: 40,
        height: 20,
    },
});

interface AudioPlayerProps {
    mp3: string;
    style?: StyleProp<ViewStyle>;
}

export default AudioPlayer;
