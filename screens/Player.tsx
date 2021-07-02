import React, { FC } from 'react';
import AudioPlayer from '../components/AudioPlayer';

const Home: FC = () => {
    return <AudioPlayer mp3={'https://cause-commune.fm/avv/29-AVV-Paul%20Citron-Ainsi%20va%20la%20ville.mp3'} />;
};

export default Home;
