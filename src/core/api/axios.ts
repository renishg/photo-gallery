import axios from 'axios';
import {apiCostants} from './constants';

export const axiosInstance = axios.create({
  baseURL: apiCostants.baseUrl,
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'},
});
