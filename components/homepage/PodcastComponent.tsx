import * as React from 'react';
import ListPodcast from './ListPodcast';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = `https://cause-commune.fm/wp-json/wp/v2/podcast`;
const PodcastComponent: FC = () => {
    const { data, status } = useQuery('podcast', () => axios.get(API_URL));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les derniers podcast</Text>
            {status === 'loading' && <Text>Chargement...</Text>}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <View>
                {data?.data.map((item: { id: string | number | null | undefined }) => (
                    <ListPodcast key={item.id} item={item} />
                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        marginTop: 35,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default PodcastComponent;
