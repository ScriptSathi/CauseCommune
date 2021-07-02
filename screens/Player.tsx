import React, { FC } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { SafeAreaView } from 'react-native';

const Home: FC = () => {
    return (
        <SafeAreaView>
            <AudioPlayer mp3={'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3'} />
        </SafeAreaView>
    );
};

export default Home;
