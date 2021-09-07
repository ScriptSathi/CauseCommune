import axios from 'axios';
import env from '../env';

const getInfoPageQuery = async () => {
    const res = await axios.get(`${env.api.info}`)
    return res.data.info
}

export default  getInfoPageQuery