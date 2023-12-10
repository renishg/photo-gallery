import axios from 'axios';
import {API_CONSTANTS} from './constants';

export const axiosInstance = axios.create({
  baseURL: API_CONSTANTS.baseUrl,
  timeout: 10000,
});
