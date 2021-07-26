import axios from 'axios';
import env from '../env';
import { Serie } from '../types/Serie';

const getSeriesQuery = async () => {
    const res = await axios.get(`${env.api.url}/series`);
    return res.data as Serie[];
};

export default getSeriesQuery;
