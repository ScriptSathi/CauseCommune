import React, { FC, useEffect, useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const Player: FC = () => {
    // Testing a way to maintain aspect ratio on images without knowing its dimensions in advance
    const [aspectRatio, setAspectRatio] = useState(1);
    const {
        mp3 = 'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3',
        title = 'Ainsi va la ville',
        image = 'https://cause-commune.fm/wp-content/uploads/2019/11/avv-2.jpg',
    } = useRoute().params as { mp3: string; title: string; image: string };

    useEffect(() => Image.getSize(image, (width, height) => setAspectRatio(width / height)), [image]);

    return (
        <SafeAreaView style={styles.root}>
            <Image source={{ uri: image }} style={[styles.image, { aspectRatio }]} />
            <Title style={styles.title}>{title}</Title>
            <AudioPlayer mp3={mp3} style={styles.audioPlayer} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain',
        margin: 10,
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
