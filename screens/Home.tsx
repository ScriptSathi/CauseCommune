import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import HomeTitle from '../components/homepage/HomeTitle';
import HomeCardCarousel from '../components/homepage/HomeCardCarousel';
import PodcastComponent from '../components/homepage/PodcastComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Home: FC = ({ navigation }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ScrollView style={{ flex: 1, backgroundColor: '#FEF7F9' }}>
                <HomeTitle />
                <HomeCardCarousel navigation={navigation} />
                <PodcastComponent />
            </ScrollView>
        </QueryClientProvider>
    );
};

export default Home;
