import React, { useState } from 'react';
import { Image, StyleSheet, Text, ScrollView, Dimensions, View, Button } from 'react-native';
import * as Font from 'expo-font';
import { Title } from 'react-native-paper';

type Props = {
    name: String;
}

const Program: React.FC  = ({ navigation, name }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    async function loadFonts() {
        await Font.loadAsync({
            TitiliumRegular: require('../assets/fonts/TitilliumWeb-Regular.ttf'),
        });
        setFontsLoaded(true);
    }
    loadFonts();
    return(
        <View style={styles.background}>
            <Title style={[styles.title, fontsLoaded ? { fontFamily: 'TitiliumRegular'} : {}] }>{ name }</Title>
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
    },
    title:{
        fontSize: 33,
        color:'#E73059',
    }
});

export default Program;
