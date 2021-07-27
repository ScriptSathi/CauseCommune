import * as React from 'react';
import { FC } from 'react';
import ListPodcast from './ListPodcast';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import getAllPodcastsQuery from '../../queries/getAllPodcast.query';
import { ActivityIndicator } from 'react-native-paper';

const PodcastComponent: FC = () => {
    const { data: podcasts, status } = useQuery('/podcasts', getAllPodcastsQuery);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les derniers podcasts</Text>
            {status === 'loading' && (
                <Text>
                    {' '}
                    <ActivityIndicator size='small' color='#E73059' />
                </Text>
            )}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <Text style={styles.podcastFrame}>
                {podcasts?.map(item => (
                    <ListPodcast key={item.id} item={item} />
                ))}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 35,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    podcastFrame: {
        width: (Dimensions.get('window').width * 87) / 100,
    },
});

export default PodcastComponent;