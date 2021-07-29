import * as React from 'react';
import { FC } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import CarouselComponent from './CarouselComponent';
import getSeriesQuery from '../../queries/getSeries.query';
import useCustomFonts from '../../hooks/useCustomFonts';

const HomeCardCarousel: FC = () => {
    const { status } = useQuery('/series', getSeriesQuery);
    const [loaded] = useCustomFonts();
    if (!loaded) return null;
    return (
        <View>
            <Text style={styles.title}>Nos émissions</Text>
            {status === 'loading' && <ActivityIndicator size='small' color='#E73059' />}
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
        fontFamily: 'TitiliumRegular',
    },
});

export default HomeCardCarousel;
