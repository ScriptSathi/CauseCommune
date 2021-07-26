import * as React from 'react';
import { FC } from 'react';
import ListPodcast from './ListPodcast';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import getAllPodcastsQuery from '../../queries/getAllPodcast.query';

const PodcastComponent: FC = () => {
    const { data: podcasts, status } = useQuery('/podcasts', getAllPodcastsQuery);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les derniers podcasts</Text>
            {status === 'loading' && <Text>Chargement...</Text>}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <View>{podcasts && podcasts.map(item => <ListPodcast key={item.id} item={item} />)}</View>
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
