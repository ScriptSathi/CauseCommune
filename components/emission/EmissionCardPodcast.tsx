import * as React from 'react';
import { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Podcast } from '../../types/Podcast';
import PodcastCard from './PodcastCard';

const EmissionCardPodcast: FC<EmissionCardPodcastProps> = ({ podcasts = [], podcastTitle }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={podcasts}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                scrollEventThrottle={16}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <PodcastCard podcast={item} podcastTitle={podcastTitle} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

interface EmissionCardPodcastProps {
    podcasts?: Podcast[];
    podcastTitle: string;
}

export default EmissionCardPodcast;
