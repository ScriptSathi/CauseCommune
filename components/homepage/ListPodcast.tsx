import React, { FC } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { decode } from 'html-entities';
import { Podcast } from '../../types/Podcast';

const ListPodcast: FC<ListPodcastProps> = ({ item }) => {
    return (
        <View>
            <Card
                style={styles.card}
                onPress={() => {
                    alert('You tapped the button!');
                }}
            >
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
        height: 300,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
});
export default ListPodcast;
