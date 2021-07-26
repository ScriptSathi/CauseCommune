import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeTitle from '../components/homepage/HomeTitle';
import HomeCardCarousel from '../components/homepage/HomeCardCarousel';
import PodcastComponent from '../components/homepage/PodcastComponent';

const Home: FC = () => {
    return (
        <ScrollView style={styles.root}>
            <HomeTitle />
            <HomeCardCarousel />
            <PodcastComponent />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FEF7F9',
    },
});

export default Home;
