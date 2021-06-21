import React, { FC } from 'react';
import { View } from 'react-native';
import HomeTitle from '../components/homepage/HomeTitle';
import HomeCardCarousel from '../components/homepage/HomeCardCarousel';
const Home: FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <HomeTitle />
            <HomeCardCarousel />
        </View>
    );
};

export default Home;
