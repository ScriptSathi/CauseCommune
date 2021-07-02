import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import HomeTitle from '../components/homepage/HomeTitle';
import HomeCardCarousel from '../components/homepage/HomeCardCarousel';
import PodcastComponent from '../components/homepage/PodcastComponent';

const Home: FC = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FEF7F9' }}>
            <HomeTitle />
            <HomeCardCarousel />
            <PodcastComponent />
        </ScrollView>
    );
};

export default Home;
