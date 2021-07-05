import React from 'react';
import { Image, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import Shares from './Shares';
import Content from './Content';


type Props = {
    data: Object;
}
const Program: React.FC<Props>  = ({ data, navigation}) => {
    useFonts({
        'TitiliumRegular': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
        'TitiliumLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    });
    const img= data.img;
    const title= data.title;
    const speaker= data.speaker;
    const link= data.link;
    const content = data.content;
    const kind = data.kind;

    return(
        <ScrollView style={styles.background}>
            <Image
                style={styles.img}
                source={{uri: img}}
            />
            <Text style={styles.txt_title}>{ title }</Text>
            <Text style={styles.txt_speaker}>{ speaker }</Text>
            <Shares twitter_link={link} fb_link={link} url_link={link} />
            <Content kind={kind} content={content} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FEF7F9",
        flexGrow: 1,
    },
    img: {
        marginTop: 50,
        width: 400,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txt_title: {
        fontFamily: "TitiliumRegular",
        marginHorizontal: 60,
        marginTop: 15,
        fontSize: 43,
        textAlign: "center",
        lineHeight: 35,
    },
    txt_speaker: {
        fontFamily: 'TitiliumLight',
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 17,
    },
});

export default Program;
