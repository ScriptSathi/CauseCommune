import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

const API_URL = `https://cause-commune.fm/wp-json/wp/v2/series`;
const HomeCardCarousel: FC = ({}) => {
const { data, status } = useQuery('emission', () => axios.get(API_URL));
const [ test, setTest] = useState([]);

    return (
        <View>
            <Text style={styles.title}>Nos émissions</Text>
            <Text> {status === 'loading' && <div>Chargement...</div>}</Text>
            <Text>{status === 'error' && <div>Contacter l'administrateur</div>}</Text>

            <View>

                {data?.data.map((value: { id: string | number | null | undefined }) => (                 
                
                test.push(value)
             
                ))}
                <CarouselComponent  data={test} />
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
