import React, { FC, useMemo } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import Shares from '../components/emission/Shares';
import Content from '../components/emission/Content';
import EmissionCardPodcast from '../components/emission/EmissionCardPodcast';
import getPodcastsQuery from '../queries/getPodcasts.query';
import { useRoute } from '@react-navigation/native';
import { Serie } from '../types/Serie';
import useCustomFonts from '../hooks/useCustomFonts';

const Program: FC = () => {
    const { serie } = useRoute().params as { serie: Serie };
    const { id, image, title, author, link, description, subtitle } = serie;
    const upperCaseTitle = useMemo(() => title.toUpperCase(), [title]);
    const { data: podcasts, status } = useQuery(['/podcasts', id, 1], () => getPodcastsQuery(id.toString(), 1));

    const [fontLoaded] = useCustomFonts();

    if (!fontLoaded) return null;

    return (
        <ScrollView style={styles.background}>
            <View style={styles.imgFrame}>
                <Image
                    style={[
                        styles.img,
                        Dimensions.get('window').width > 900 ? { resizeMode: 'contain' } : { resizeMode: 'cover' },
                    ]}
                    source={{ uri: image }}
                />
            </View>
            <Text style={styles.txt_title}>{upperCaseTitle}</Text>
            <Text style={styles.txt_speaker}>Proposé par {author}</Text>
            <Shares urlLink={link} />
            <Content kind={subtitle} content={description} />
            <Text style={styles.podcast_title}>Tous les podcasts</Text>
            {status === 'loading' && <Text>Chargement...</Text>}
            {status === 'error' && <Text>Contactez l'administrateur</Text>}
            <EmissionCardPodcast podcasts={podcasts} podcastTitle={upperCaseTitle} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FEF7F9',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    imgFrame: {
        marginTop: '5%',
        marginBottom: '5%',
        width: '80%',
        height: 169,
        alignSelf: 'center',
    },
    txt_title: {
        fontFamily: 'TitiliumRegular',
        marginHorizontal: 20,
        fontSize: 40,
        textAlign: 'center',
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
