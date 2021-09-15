import * as React from 'react';
import { FC } from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import { Podcast } from '../../types/Podcast';
import PodcastCard from './PodcastCard';

const EmissionCardPodcast: FC<EmissionCardPodcastProps> = ({ podcasts = [], podcastTitle, isLoading, fetchNextPage }) => {
    // @ts-ignore
    const renderItemFunction = ({item}) => {
        return (
            <PodcastCard podcast={item} podcastTitle={podcastTitle} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                refreshing={isLoading}
                data={podcasts}
                horizontal
                initialNumToRender={5}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                removeClippedSubviews={Platform.OS==='android'}
                scrollEventThrottle={16}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={1}
                onEndReached={() => fetchNextPage()}
                renderItem={renderItemFunction}
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
