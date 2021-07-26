import axios from 'axios';
import env from '../env';
import { Podcast } from '../types/Podcast';

const getAllPodcastsQuery = async () => {
    const res = await axios.get(`${env.api.url}/podcast`);
    return res.data as Podcast[];
};

export default getAllPodcastsQuery;
