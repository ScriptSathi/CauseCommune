import React, { FC, useCallback } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { decode } from 'html-entities';
import { Podcast } from '../../types/Podcast';
import { useNavigation } from '@react-navigation/native';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import getPlayerArguments from '../../fns/getPlayerArguments';
import useCustomFonts from '../../hooks/useCustomFonts';

const ListPodcast: FC<ListPodcastProps> = ({ item }) => {
    const [fontLoaded] = useCustomFonts();

    const navigation = useNavigation();
    const { stop } = useAudioPlayer();
    const onPress = useCallback(async () => {
        await stop();
        navigation.navigate('Player', getPlayerArguments(item));
    }, [stop, item]);

    if (!fontLoaded) return null;
    return (
        <View>
            <Card style={styles.card} onPress={onPress}>
                <Card.Content>
                <Image source={{ uri: item.episode_player_image }} style={styles.image} />
                    <Title style={styles.podcastTitle}>{decode(item.title.rendered)}</Title>
                </Card.Content>
            </Card>
        </View>
    );
};

interface ListPodcastProps {
    item: Podcast;
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        margin: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        width: (Dimensions.get('window').width * 80) / 100,
        flex: 1,
        padding: 0,
    },
    image: {
        width: '95%',
        marginLeft: 6,
        marginTop: -5,
        height: 300,
        resizeMode: 'contain',
    },
    podcastTitle: {
        fontFamily: 'TitiliumLight',
        marginTop: -10,
    }
});
export default ListPodcast;
