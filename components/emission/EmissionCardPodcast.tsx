import * as React from 'react';
import { Button, Card, Title } from 'react-native-paper';
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { FC, useState } from 'react';
import data from '../../dataPodcast.js';
import * as Font from 'expo-font';

const EmissionCardPodcast: FC = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    async function loadFonts() {
        await Font.loadAsync({
            TitiliumRegular: require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
            TitiliumLight: require('../../assets/fonts/TitilliumWeb-Light.ttf'),
        });
        setFontsLoaded(true);
    }
    loadFonts();
    if(fontsLoaded) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{}}>
                                <Card.Content style={styles.card}>
                                    <Title
                                        style={[styles.title, item.title.length > 15 ? { width: "100%", } : { width: "70%", }]}>{item.title}</Title>
                                    <View style={styles.framePodcast}>
                                        <Text
                                            style={styles.podcast}>{item.podcast.length > 50 ? item.podcast.slice(0, 50) + " ..." : item.podcast}</Text>
                                    </View>
                                    <Button
                                        onPress={() => navigation.navigate('Player')}
                                        color="#fff"
                                        accessibilityLabel="Ecouter le podcast"
                                        style={styles.button}
                                    >
                                        Ecouter
                                    </Button>
                                </Card.Content>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
    else{
        return null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        marginTop: 15,
        marginBottom: 30,
        marginHorizontal: 12,
        backgroundColor: "white",
        height: 180,
        width: 177,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        zIndex:999,
    },
    title: {
        marginLeft: -16,
        fontSize: 13,
        fontFamily: "TitiliumRegular",
        paddingHorizontal: 10,
        paddingTop: 5,
        marginBottom: 5,
        backgroundColor: "#009C8F",
        color: "white",
    },
    framePodcast: {
        height: "50%",
    },
    podcast: {
        fontFamily: "TitiliumRegular",
        fontSize: 18,
    },
    content: {
        marginTop: 5,
        fontFamily: "TitiliumLight",
        fontSize: 10,
    },
    button: {
        marginTop: 5,
        width: '100%',
        height: 30,
        backgroundColor: '#E73059',
    }
});
export default EmissionCardPodcast;