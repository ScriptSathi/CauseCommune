import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

type Props = {
    kind: String;
    content: String;
}
const Content: React.FC<Props>  = ({ kind, content}) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    async function loadFonts() {
        await Font.loadAsync({
            TitiliumRegular: require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
            TitiliumLight: require('../../assets/fonts/TitilliumWeb-Light.ttf'),
            MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        });
        setFontsLoaded(true);
    }
    loadFonts();
    if(fontsLoaded) {
        return (
            <View style={styles.frame}>
                <View style={styles.titleFrame}>
                    <Text style={styles.title}>{kind}</Text>
                </View>
                <Text style={styles.content}>{content}</Text>
            </View>
        );
    }
    else {
        return null;
    }
}

const styles = StyleSheet.create({
    frame: {
        alignSelf: "center",
        width: '85%',
        backgroundColor: "white",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 10,
        zIndex:999,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    titleFrame: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    title: {
        fontSize: 22,
        color: "#E73059",
        textAlign: "center",
        fontFamily: "MontserratMedium",
    },
    content: {
        fontFamily: "TitiliumLight",
        marginLeft: 30,
        marginRight: 18,
        marginBottom: 20,
        fontSize: 20,
        lineHeight: 27,
    }
});

export default Content;