import React, { FC } from 'react';
import {ActivityIndicator, Card} from 'react-native-paper';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useInfiniteQuery} from 'react-query';
import getSeriesQuery from '../../queries/getSeries.query';


const CarouselComponent: FC = () => {
    const navigation = useNavigation();
    const {
        data: series,
        isLoading,
        fetchNextPage,
        status} = useInfiniteQuery('/series',
        ({ pageParam = 1 })  => getSeriesQuery(pageParam),
        {  getNextPageParam: (lastPage, pages) => pages.length + 1}
    );

    const allPagesArray:any = []
    if (series?.pages) {
        series.pages.forEach(itemsArray => allPagesArray.push(itemsArray));
    } else {
        null;
    }
    const flatSeries = allPagesArray.flat()



    return (
        <View style={styles.container}>
            {status === 'loading' && (
                <Text>
                    <ActivityIndicator size='small' color='#E73059' />
                </Text>
            )}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <FlatList
                refreshing={isLoading}
                data={flatSeries}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={1}
                onEndReached={() => fetchNextPage()}
                renderItem={({ item: serie }) => (
                    <View>
                        <Card
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("L'émission", {
                                    serie,
                                })
                            }
                        >
                            <Card.Cover style={styles.image} source={{ uri: serie.image }} />
                        </Card>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
    },
    card: {
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        width: 200,
        height: 200,
    },
    image: {
        margin: 5,
        resizeMode: 'contain',
        aspectRatio: 1,
        flex: 1,
    },
});
export default CarouselComponent;
