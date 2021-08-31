import * as React from 'react';
import { FC } from 'react';
import ListPodcast from './ListPodcast';
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import getAllPodcastsQuery from '../../queries/getAllPodcast.query';
import { ActivityIndicator } from 'react-native-paper';
import useCustomFonts from '../../hooks/useCustomFonts';

const PodcastComponent: FC = () => {
    const {
        data: podcasts,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('/podcasts', ({ pageParam = 1 }) => getAllPodcastsQuery(pageParam), {
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });
    const [loaded] = useCustomFonts();
    if (!loaded) return null;

    const allPagesArray: any = [];
    if (podcasts?.pages) {
        podcasts.pages.forEach(itemsArray => allPagesArray.push(itemsArray));
    } else {
        null;
    }
    const flatPodcasts = allPagesArray.flat();

    const Separator = () => (
        <View style={styles.separator} />
    );


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les derniers podcasts</Text>
            {status === 'loading' && (
                <Text>
                    <ActivityIndicator size='small' color='#E73059' />
                </Text>
            )}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <FlatList
                refreshing={isLoading}
                data={flatPodcasts}
                bounces={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListPodcast item={item} />}
                keyExtractor={item => item.id.toString()}

            />
            <Button
                color='#E73059'
                title={'Podcast suivant'}
                onPress={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                accessibilityLabel="podcasts suivant"
            />
            <Separator />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        marginTop: 35,
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'TitiliumRegular',
    },
    podcastFrame: {
        width: (Dimensions.get('window').width * 87) / 100,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#FEF7F9',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default PodcastComponent;
