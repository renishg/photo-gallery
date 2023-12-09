import {axiosInstance} from './axios';
import {apiCostants} from './constants';
import {GetPhotosResponse} from './types';
import {getCommonQueryParams} from './utils';

const getPhotos = () => {
  return axiosInstance.get<GetPhotosResponse>('/', {
    params: {
      method: apiCostants.methods.getPhotos,
      ...getCommonQueryParams(),
    },
  });
};

export const apiService = {
  getPhotos,
};
