import Axios from 'axios';
import { authHeader } from './auth';

const URL = process.env.VUE_APP_BASE_URL;
const Http = Axios.create({
    baseURL: URL,
});
Http.defaults.headers = authHeader();

export default Http;
