import { useContext } from 'react';
import { AudioPlayerContext } from '../components/player/AudioPlayerProvider';

const useAudioPlayer = () => useContext(AudioPlayerContext);

export default useAudioPlayer;
