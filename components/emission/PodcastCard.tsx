import { decode } from 'html-entities';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import * as React from 'react';
import { FC, useMemo } from 'react';
import { Podcast } from '../../types/Podcast';
import { useNavigation } from '@react-navigation/native';

const PodcastCard: FC<PodcastCardProps> = ({ podcast, podcastTitle }) => {
    const navigation = useNavigation();
    const title = useMemo(() => decode(podcast.title.rendered), [podcast.title.rendered]);
    return (
        <View>
            <Card.Content style={styles.card}>
                <Title style={[styles.title, podcastTitle.length > 15 ? { width: '90%' } : { width: '70%' }]}>
                    {podcastTitle}
                </Title>
                <View style={styles.framePodcast}>
                    <Text style={styles.podcast}>{title.length > 40 ? title.slice(0, 40) + ' ...' : title}</Text>
                </View>
                <Button
                    onPress={() =>
                        navigation.navigate('Player', {
                            dataPodcast: podcast,
                        })
                    }
                    color='#fff'
                    accessibilityLabel='Écouter le podcast'
                    style={styles.button}
                >
                    Écouter
                </Button>
            </Card.Content>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        marginBottom: 30,
        marginHorizontal: 12,
        backgroundColor: 'white',
        height: 180,
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
        height: '50%',
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
        marginTop: 5,
        width: '100%',
        height: 30,
        backgroundColor: '#E73059',
    },
});

interface PodcastCardProps {
    podcast: Podcast;
    podcastTitle: string;
}

export default PodcastCard;
