import axios from 'axios';
import env from '../env';
import { Podcast } from '../types/Podcast';

const getAllPodcastsQuery = async (page: number) => {
    const res = await axios.get(`${env.api.url}/podcast?page=${page}`);
    return res.data as Podcast[];
};

export default getAllPodcastsQuery;
