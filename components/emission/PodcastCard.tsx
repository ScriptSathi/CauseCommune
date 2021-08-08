import { decode } from 'html-entities';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import * as React from 'react';
import { FC, useCallback, useMemo } from 'react';
import { Podcast } from '../../types/Podcast';
import { useNavigation } from '@react-navigation/native';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import getPlayerArguments from '../../fns/getPlayerArguments';

const PodcastCard: FC<PodcastCardProps> = ({ podcast, podcastTitle }) => {
    const navigation = useNavigation();
    const title = useMemo(() => decode(podcast.title.rendered), [podcast.title.rendered]);

    const { stop } = useAudioPlayer();
    const onListenToPodcastPress = useCallback(async () => {
        await stop();
        navigation.navigate('Player', getPlayerArguments(podcast));
    }, [podcast, stop]);

    return (
            <Card.Content style={styles.card}>
                <Title style={[styles.title, podcastTitle.length > 15 ? { width: '90%' } : { width: '70%' }]}>
                    {podcastTitle}
                </Title>
                <View style={styles.framePodcast}>
                    <Text style={styles.podcast}>{title.length > 40 ? title.slice(0, 40) + ' ...' : "aaefaafafa ah fafahfahfahfheafeafeahfafahfahfahfheafeafeah f"}</Text>
                </View>
                <Button
                    onPress={onListenToPodcastPress}
                    color='#fff'
                    accessibilityLabel='Écouter le podcast'
                    style={styles.button}
                >
                    <Text style={styles.buttonTxt}>Écouter</Text>
                </Button>
            </Card.Content>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        marginBottom: 30,
        marginHorizontal: 12,
        backgroundColor: 'white',
        width: 177,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        zIndex: 999,
    },
    title: {
        marginLeft: -16,
        fontSize: 13,
        marginTop: -1,
        fontFamily: 'TitiliumRegular',
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        backgroundColor: '#009C8F',
        color: 'white',
        lineHeight: 16,
    },
    framePodcast: {
        alignSelf: 'center',
    },
    podcast: {
        fontFamily: 'TitiliumRegular',
        fontSize: 18,
    },
    content: {
        marginTop: 5,
        fontFamily: 'TitiliumLight',
        fontSize: 10,
    },
    button: {
        width: '80%',
        height: 30,
        backgroundColor: '#E73059',
        fontSize: 5,
        alignContent: 'flex-end',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonTxt: {
        marginTop: -5,
        fontSize: 10,
    }
});

interface PodcastCardProps {
    podcast: Podcast;
    podcastTitle: string;
}

export default PodcastCard;
