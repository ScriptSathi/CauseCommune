import * as React from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

import { FC } from 'react';
import data from '../../data';

const PodcastComponent: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les derniers podcast</Text>
            <FlatList
                data={data}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        margin: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        width: Dimensions.get('window').width - 50,
        borderRadius: 0,
    },
    title: {
        marginTop: 35,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default PodcastComponent;
