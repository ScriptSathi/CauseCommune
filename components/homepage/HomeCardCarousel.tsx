import * as React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import CarouselComponent from './CarouselComponent';
import getSeriesQuery from '../../queries/getSeries.query';

const HomeCardCarousel: FC = () => {
    const { status } = useQuery('/series', getSeriesQuery);
    return (
        <View>
            <Text style={styles.title}>Nos émissions</Text>
            {status === 'loading' && <Text>Chargement...</Text>}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <View>
                <CarouselComponent />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default HomeCardCarousel;
