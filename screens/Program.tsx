import React, { FC, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { useQuery } from 'react-query';
import Shares from '../components/emission/Shares';
import Content from '../components/emission/Content';
import EmissionCardPodcast from '../components/emission/EmissionCardPodcast';
import getPodcastsQuery from '../queries/getPodcasts.query';
import { useRoute } from '@react-navigation/native';
import { Serie } from '../types/Serie';
import useCustomFonts from '../hooks/useCustomFonts';
import Layout from '../constants/Layout';

const Program: FC = () => {
    const { serie } = useRoute().params as { serie: Serie };
    const { id, image, title, author, link, description, subtitle } = serie;
    const upperCaseTitle = useMemo(() => title.toUpperCase(), [title]);
    const { data: podcasts, status } = useQuery(['/podcasts', id, 1], () => getPodcastsQuery(id.toString(), 1));

    const [fontLoaded] = useCustomFonts();

    if (!fontLoaded) return null;

    return (
        <ScrollView style={styles.background}>
            <Image style={styles.img} source={{ uri: image }} />
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
        flex: 1,
    },
    img: {
        height: Layout.width - 40,
        aspectRatio: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 20,
    },
    imgFrame: {
        marginTop: '5%',
        marginBottom: '5%',
        width: '80%',
        height: 169,
        alignSelf: 'center',
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
