import React, { FC } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, StyleSheet, View } from 'react-native';
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
                <Card.Cover source={{ uri: item.episode_player_image }} />
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
    },
});
export default ListPodcast;
