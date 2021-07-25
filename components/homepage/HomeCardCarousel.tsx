import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

const API_URL = `https://cause-commune.fm/wp-json/wp/v2/series`;
const HomeCardCarousel: FC = ({ navigation }) => {
    const { data, status } = useQuery('emission', () => axios.get(API_URL));
    const [series, setSeries] = useState([]);
    data?.data.map((value: { id: string | number | null | undefined }) => series.push(value));

    return (
        <View>
            <Text style={styles.title}>Nos émissions</Text>
            {status === 'loading' && <Text>Chargement...</Text>}
            {status === 'error' && <Text>Contacter l'administrateur</Text>}
            <View>
                <CarouselComponent navigation={navigation} data={series} />
            </View>
        </View>
    );
};
interface HomeCardProps {
    img: string;
}
const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default HomeCardCarousel;
