import React, { FC } from 'react';
import { Card, Title } from 'react-native-paper';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

// @ts-ignore
const CarouselComponent = ({ data }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                bounces={false}
                renderItem={({ item }) => (
                    <View>
                        <Card
                            style={styles.card}
                            onPress={() => {
                                alert('You tapped the button!');
                            }}
                        >
                            <Card.Cover source={{ uri: item.image }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                            </Card.Content>
                        </Card>
                    </View>
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );
};

interface ListPodcast {
    img: string;
    title: string;
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
});
export default CarouselComponent;
