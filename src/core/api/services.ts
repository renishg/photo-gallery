import {getCommonQueryParams} from 'src/utils';
import {axiosInstance} from './axios';
import {API_CONSTANTS} from './constants';
import {GetPhotosResponse} from './types';

const getPhotos = () => {
  return axiosInstance.get<GetPhotosResponse>('/', {
    params: {
      method: API_CONSTANTS.methods.getPhotos,
      ...getCommonQueryParams(),
    },
  });
};

export const apiService = {
  getPhotos,
};
