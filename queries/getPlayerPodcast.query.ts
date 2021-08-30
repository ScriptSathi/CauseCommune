import axios from 'axios';
import env from '../env';
import { Podcast } from '../types/Podcast';

const getPlayerPodcast = async () => {
    const res = await axios.get(`${env.api.url}/podcast`);
    return res.data as Podcast[];
};

export default getPlayerPodcast;
