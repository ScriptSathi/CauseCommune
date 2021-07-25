import React, { useState } from 'react';
import { Image, StyleSheet, Text, ScrollView, Dimensions, View, Button } from 'react-native';
import { useQuery } from 'react-query';
import * as Font from 'expo-font';
import Shares from '../components/emission/Shares';
import Content from '../components/emission/Content';
import EmissionCardPodcast from '../components/emission/EmissionCardPodcast';
import axios from 'axios'

const Program: React.FC  = ({ route, navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const { dataEmission } = route.params;
    const idEmission = dataEmission.id
    const API_URL_PODCASTS = "https://cause-commune.fm/wp-json/wp/v2/podcast?series="+idEmission+"&per_page=30&page=1"

    // const { data, status } = useQuery('podcast', () => axios.get(API_URL_PODCASTS));
    // const [emission, setEmission] = useState([]);
    // data?.data.map((value: { id: string | number | null | undefined }) => emission.push(value));

    async function loadFonts() {
        await Font.loadAsync({
            TitiliumRegular: require('../assets/fonts/TitilliumWeb-Regular.ttf'),
            TitiliumLight: require('../assets/fonts/TitilliumWeb-Light.ttf'),
        });
        setFontsLoaded(true);
    }
    loadFonts();
    const img= dataEmission.image;
    const title= dataEmission.name;
    const speaker= dataEmission.author;
    const link= dataEmission.link;
    const content = dataEmission.description;
    const subtitle = dataEmission.subtitle;

    if(fontsLoaded){
        return(
            <ScrollView style={styles.background}>
                <View style={styles.imgFrame} >
                    {/*{status === 'loading' && <Text>Chargement...</Text>}*/}
                    {/*{status === 'error' && <Text>Contacter l'administrateur</Text>}*/}
                    <Image
                        style={ [styles.img, Dimensions.get('window').width > 900 ? { resizeMode: "contain", }  : { resizeMode: "cover", }] }
                        source={{uri: img}}
                    />
                </View>
                <Text style={styles.txt_title}>{ title.toUpperCase() }</Text>
                <Text style={styles.txt_speaker}>Proposé par { speaker }</Text>
                <Shares url_link={link} />
                <Content kind={subtitle} content={content} />
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
        height: 169,
        // height: 200, avant le fetch api
        alignSelf: 'center',
    },
    txt_title: {
        fontFamily: "TitiliumRegular",
        marginHorizontal: 10,
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
