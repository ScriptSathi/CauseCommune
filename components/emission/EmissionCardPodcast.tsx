import * as React from 'react';
import { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Podcast } from '../../types/Podcast';
import PodcastCard from './PodcastCard';

const EmissionCardPodcast: FC<EmissionCardPodcastProps> = ({ podcasts = [], podcastTitle, isLoading, fetchNextPage }) => {
    return (
        <View style={styles.container}>
            <FlatList
                refreshing={isLoading}
                data={podcasts}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={16}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={1}
                onEndReached={() => fetchNextPage()}
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
    isLoading?: Boolean;
    fetchNextPage?: any;
}

export default EmissionCardPodcast;
