import React from 'react';
import { Image, StyleSheet, Text, ScrollView, Button, Dimensions, View } from 'react-native';
import { useFonts } from 'expo-font';
import Shares from './Shares';
import Content from './Content';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EmissionCardPodcast from './EmissionCardPodcast';
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
            <Text style={styles.podcast_title}>Tous nos podcasts</Text>
            <EmissionCardPodcast />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FEF7F9",
        flexGrow: 1,
    },
    img: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    imgIpad: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
    imgFrame: {
        marginTop: "5%",
        marginBottom: "2%",
        width: "80%",
        height: 200,
        alignSelf: 'center',
    },
    txt_title: {
        fontFamily: "TitiliumRegular",
        marginHorizontal: 60,
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
    podcast_title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Program;
