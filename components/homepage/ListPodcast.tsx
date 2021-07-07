import React, { FC } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const ListPodcast = ({ item }) => {
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
                    <Title>{item.title.rendered}</Title>
                </Card.Content>
            </Card>
        </View>
    );
};

interface ListPodcast {
    img: string;
    title: string;
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
