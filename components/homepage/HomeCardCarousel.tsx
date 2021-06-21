import * as React from 'react';
import { Card, Title } from 'react-native-paper';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

import { FC } from 'react';
import data from '../../data';

const HomeCardCarousel: FC = () => {
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
                    <Card style={styles.card}>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        margin: 12,
    },
    title: {
        marginTop: 15,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default HomeCardCarousel;
