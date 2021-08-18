import axios from 'axios';
import env from '../env';
import { Serie } from '../types/Serie';

const getSeriesQuery = async (page: number) => {
    const res = await axios.get(`${env.api.url}/series?page=${page}`);
    return res.data as Serie[];
};

export default getSeriesQuery;
