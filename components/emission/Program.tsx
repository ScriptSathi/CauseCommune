import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Shares from './Shares';

export type Props = {
    data: Object;
}
const Program: React.FC<Props>  = ({ data}) => {
    useFonts({
        'TitiliumRegular': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
        'TitiliumLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    });

    const img= data.img;
    const title= data.title;
    const speaker= data.speaker;
    const link= data.link;
    return(
        <View style={styles.background}>
            <Image
                style={styles.img}
                source={{uri: img}}
            />
            <Text style={styles.txt_title}>{ title }</Text>
            <Text style={styles.txt_speaker}>{ speaker }</Text>
            <Shares twitter_link={link} fb_link={link} url_link={link} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FEF7F9",
    },
    img: {
        width: 400,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txt_title: {
        fontFamily: "TitiliumRegular",
        fontSize: 33,
        textAlign: "center"
    },
    txt_speaker: {
        fontFamily: 'TitiliumLight',
        textAlign: 'center'
    }
});

export default Program;
