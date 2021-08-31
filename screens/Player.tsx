import React, { FC, useMemo, useState } from 'react';
import AudioPlayer from '../components/player/AudioPlayer';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import useAudioPlayer from '../hooks/useAudioPlayer';
import { useQuery } from 'react-query';

import getPlayerArguments from '../fns/getPlayerArguments';
import getPlayerPodcast from '../queries/getPlayerPodcast.query';

const errorLoadingMessage =  "Podcast indisponible";

const Player: FC = () => {
    // Testing a way to maintain aspect ratio on images without knowing its dimensions in advance
    const [animating , setAnimating] = useState(true)
    const { data: podcasts } = useQuery('/player', getPlayerPodcast);
    const route = useRoute();
    const { mp3, title, image } = useMemo(() => {
        const params = route.params as { mp3: string; title: string; image: string };
        if (params?.mp3 && params?.title && params?.image) return params;
        if (podcasts) {
            return getPlayerArguments(podcasts[0]);
        }
        return {
            mp3: 'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3',
            title: 'Ainsi va la ville',
            image: 'https://cause-commune.fm/wp-content/uploads/2019/11/avv-2.jpg',
        };
    }, [route.params]);

    const { isLoading } = useAudioPlayer();
    let closeActivityIndicator = () => setTimeout(() => setAnimating(false), 10000)
    closeActivityIndicator()
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={[styles.image]} />
                {isLoading && <ActivityIndicator animating={animating} />}
                {!animating &&
                <Text style={styles.errorMessage}>
                    {errorLoadingMessage}
                </Text>
                }
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
        alignItems: 'center',
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
        aspectRatio: 1,
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
    errorMessage: {
        marginBottom: 5,
        color: '#E73059',
    }
});

export default Player;
