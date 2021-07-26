import React, { FC, useEffect, useMemo, useState } from 'react';
import AudioPlayer from '../components/player/AudioPlayer';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import useAudioPlayer from '../hooks/useAudioPlayer';

const Player: FC = () => {
    // Testing a way to maintain aspect ratio on images without knowing its dimensions in advance
    const [aspectRatio, setAspectRatio] = useState(1);
    const route = useRoute();
    const { mp3, title, image } = useMemo(() => {
        const params = route.params as { mp3: string; title: string; image: string };
        if (params?.mp3 && params?.title && params?.image) return params;
        return {
            mp3: 'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3',
            title: 'Ainsi va la ville',
            image: 'https://cause-commune.fm/wp-content/uploads/2019/11/avv-2.jpg',
        };
    }, [route.params]);

    useEffect(() => Image.getSize(image, (width, height) => setAspectRatio(width / height)), [image]);

    const { isLoading } = useAudioPlayer();

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={[styles.image, { aspectRatio }]} />
                {isLoading && <ActivityIndicator />}
            </View>
            <Title style={styles.title}>{title}</Title>
            <AudioPlayer mp3={mp3} style={styles.audioPlayer} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        position: 'relative',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        margin: 10,
    },
    spinner: {
        position: 'absolute',
    },
    root: {
        flex: 1,
        margin: 10,
    },
    title: {
        textAlign: 'center',
        marginTop: 40,
    },
    audioPlayer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
});

export default Player;
