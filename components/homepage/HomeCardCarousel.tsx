import * as React from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

import { FC } from 'react';
import data from '../../data';

const HomeCardCarousel: FC = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nos émissions</Text>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        onPress={() => {
                            alert('You tapped the button!');
                        }}
                    >
                        <Card.Cover source={{ uri: item.img }} />
                        <Card.Content>
                            <Title>{item.title}</Title>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
};

interface HomeCardProps {
    img: string;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        width: Dimensions.get('window').width - 150,
        borderRadius: 0,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
    },
    title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default HomeCardCarousel;
