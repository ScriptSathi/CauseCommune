import * as React from 'react';
import { Card, Title } from 'react-native-paper';
import { Animated, Dimensions, FlatList, Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';

import { FC } from 'react';
import data from '../../dataPodcast.js';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
const Spacing = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const EmissionCardPodcast: FC = ({}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    useFonts({
        'TitiliumRegular': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
        'TitiliumLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    });
    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderToHardwareTextureAndroid
                pagingEnabled
                bounces={true}
                snapToInterval={ITEM_SIZE}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: true,
                })}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    const inputRange = [(index - 2 ) * ITEM_SIZE, (index + 0.1) * ITEM_SIZE, (index + 0.2) * ITEM_SIZE];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 0, 10],
                    });
                    return (
                        <View style={{}}>
                            <Animated.View
                                style={{
                                    transform: [{ translateY }],
                                    marginHorizontal: Spacing * 2.5,
                                }}
                            >
                                <Card.Content style={ styles.card }>
                                    <Title style={ [styles.title, item.title.length > 15 ? { width: "100%",} : { width: "70%",} ] }>{ item.title }</Title>
                                    <View style={ styles.framePodcast }>
                                        <Text style={ styles.podcast } >{ item.podcast.length > 50 ? item.podcast.slice(0,50) + " ..." : item.podcast}</Text>
                                    </View>
                                    <Button
                                        onPress={function (){console.log("toto")}}
                                        title="Voir plus"
                                        color="#E73059"
                                        accessibilityLabel="Ecouter le podcast"
                                    />
                                </Card.Content>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: "white",
        height: 180,
        width: 177,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    title: {
        marginLeft: -16,
        fontSize: 13,
        fontFamily: "TitiliumRegular",
        paddingHorizontal: 10,
        paddingTop: 5,
        marginBottom: 10,
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
    }
});
export default EmissionCardPodcast;