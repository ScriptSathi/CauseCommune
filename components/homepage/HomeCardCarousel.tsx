import * as React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarouselComponent from './CarouselComponent';
import useCustomFonts from '../../hooks/useCustomFonts';

const HomeCardCarousel: FC = () => {
    const [loaded] = useCustomFonts();
    if (!loaded) return null;
    return (
        <View>
            <Text style={styles.title}>Nos émissions</Text>
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
