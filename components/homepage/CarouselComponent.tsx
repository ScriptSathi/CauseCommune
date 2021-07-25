import React from 'react';
import { Card, Title } from 'react-native-paper';
import { Text, Dimensions, FlatList, PixelRatio, StatusBar, StyleSheet, View } from 'react-native';

// @ts-ignore
const CarouselComponent = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <Card
                            style={styles.card}
                            onPress={() => navigation.navigate('L\'émission',
                                {
                                    dataEmission: item
                                }
                            )}
                        >
                            <Card.Cover style={styles.image} source={{ uri: item.image }} />
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
    },
    card: {
        width: Dimensions.get('window').width * 0.5,
        borderRadius: 5,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        zIndex:999,
    },
    image: {
        width: Dimensions.get('window').width * 0.56,
    },
});
export default CarouselComponent;