import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Podcast } from '../../types/Podcast';
import PodcastCard from './PodcastCard';

const EmissionCardPodcast: FC<EmissionCardPodcastProps> = ({ podcasts = [], podcastTitle, isLoading, fetchNextPage }) => {
    const [animating , setAnimating] = useState(true)

   const renderLoader = () => {
                return (
                    <View style={styles.loader}>
                        { animating && <ActivityIndicator size='small' color='#E73059'/>}
                    </View>
                )

    };


   return (
        <View style={styles.container}>
            <FlatList
                data={podcasts}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={16}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderLoader}
                onEndReached={()  => {fetchNextPage(); setAnimating(false)}}
                renderItem={({ item }) => <PodcastCard podcast={item} podcastTitle={podcastTitle} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
    },
    loader:{
        marginTop: 90,
    }
});

interface EmissionCardPodcastProps {
    podcasts?: Podcast[];
    podcastTitle: string;
    isLoading?: Boolean;
    fetchNextPage?: any;
}

export default EmissionCardPodcast;
