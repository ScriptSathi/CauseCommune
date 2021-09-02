import axios from 'axios';
import env from '../env';
import { Podcast } from '../types/Podcast';

const getPodcastsQuery = async (serieId: string, page: number, perPage: number = 15) => {
    const res = await axios.get(`${env.api.url}/podcast?series=${serieId}&page=${page}&per_page=${perPage}`);
    console.log(res)
    return res.data as Podcast[];
};

export default getPodcastsQuery;
