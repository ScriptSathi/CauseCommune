import React, { useState } from 'react';
import { Image, StyleSheet, Text, ScrollView, Dimensions, View, Button } from 'react-native';
import * as Font from 'expo-font';
import Shares from './Shares';
import Content from './Content';
import EmissionCardPodcast from './EmissionCardPodcast';
import { data } from '../../data.json'


const Program: React.FC  = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    async function loadFonts() {
        await Font.loadAsync({
            TitiliumRegular: require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
            TitiliumLight: require('../../assets/fonts/TitilliumWeb-Light.ttf'),
        });
        setFontsLoaded(true);
    }
    loadFonts();
    const img= data.img;
    const title= data.title;
    const speaker= data.speaker;
    const link= data.link;
    const content = data.content;
    const kind = data.kind;
    if(fontsLoaded){
        return(
            <ScrollView style={styles.background}>
                <View style={styles.imgFrame} >
                    <Image
                        style={ [styles.img, Dimensions.get('window').width > 900 ? { resizeMode: "contain", }  : { resizeMode: "cover", }] }
                        source={{uri: img}}
                    />
                </View>
                <Text style={styles.txt_title}>{ title }</Text>
                <Text style={styles.txt_speaker}>{ speaker }</Text>
                <Shares twitter_link={link} fb_link={link} url_link={link} />
                <Content kind={kind} content={content} />
                <Text style={styles.podcast_title}>Tous les podcasts</Text>
                <EmissionCardPodcast navigation={navigation}/>
            </ScrollView>
        );
    }
    else {
        return null
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FEF7F9",
    },
    img: {
        width: "100%",
        height: "100%",
    },
    imgFrame: {
        marginTop: "5%",
        marginBottom: "5%",
        width: "80%",
        height: 200,
        alignSelf: 'center',
    },
    txt_title: {
        fontFamily: "TitiliumRegular",
        marginHorizontal: 60,
        fontSize: 43,
        textAlign: "center",
        lineHeight: 48,
    },
    txt_speaker: {
        fontFamily: 'TitiliumLight',
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 17,
    },
    podcast_title: {
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Program;
