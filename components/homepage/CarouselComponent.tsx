import React, { FC } from 'react';
import { Card } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import getSeriesQuery from '../../queries/getSeries.query';

const CarouselComponent: FC = () => {
    const navigation = useNavigation();
    const { data: series, isLoading, refetch } = useQuery('/series', getSeriesQuery);
    return (
        <View style={styles.container}>
            <FlatList
                refreshing={isLoading}
                onRefresh={() => refetch()}
                data={series}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
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
