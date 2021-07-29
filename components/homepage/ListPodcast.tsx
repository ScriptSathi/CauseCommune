import React, { FC, useCallback, useMemo } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { decode } from 'html-entities';
import { Podcast } from '../../types/Podcast';
import { useNavigation } from '@react-navigation/native';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const ListPodcast: FC<ListPodcastProps> = ({ item }) => {
    const navigation = useNavigation();
    const { stop } = useAudioPlayer();
    const playerParams = useMemo(
        () => ({
            mp3: item.meta.audio_file,
            title: decode(item.title.rendered),
            image: item.episode_player_image,
        }),
        [item]
    );
    const onPress = useCallback(async () => {
        await stop();
        navigation.navigate('Player', playerParams);
    }, [stop]);

    return (
        <View>
            <Card style={styles.card} onPress={onPress}>
                <Image source={{ uri: item.episode_player_image }} style={styles.image} />
                <Card.Content>
                    <Title>{decode(item.title.rendered)}</Title>
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
        margin: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        width: (Dimensions.get('window').width * 80) / 100,
        borderRadius: 0,
        flex: 1,
        paddingTop: 0,
    },
    image: {
        marginTop: 5,
        height: 300,
        resizeMode: 'contain',
    },
});
export default ListPodcast;
