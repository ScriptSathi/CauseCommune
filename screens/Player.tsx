import React, { FC, useEffect, useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const Player: FC = () => {
    // Testing a way to maintain aspect ratio on images without knowing its dimensions in advance
    const [aspectRatio, setAspectRatio] = useState(1);
    useEffect(() => {
        Image.getSize(FAKE_DATA.image, (width, height) => {
            console.log({
                width,
                height,
                aspectRatio: width / height,
            });
            setAspectRatio(width / height);
        });
    }, [FAKE_DATA.image]);

    return (
        <SafeAreaView style={styles.root}>
            <Image source={{ uri: FAKE_DATA.image }} style={[styles.image, { aspectRatio }]} />
            <Title style={styles.title}>{FAKE_DATA.title}</Title>
            <AudioPlayer mp3={FAKE_DATA.mp3} style={styles.audioPlayer} />
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

const FAKE_DATA = {
    image: 'https://cause-commune.fm/wp-content/uploads/2019/11/avv-2.jpg',
    title: 'Ainsi va la ville',
    mp3: 'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3',
};

export default Player;
