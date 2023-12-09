import {apiCostants} from './constants';
import {Photo} from './types';

export const getImageUri = (photo: Photo) => {
  const {farm, server, id, secret} = photo;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

export const getCommonQueryParams = () => {
  return {
    api_key: apiCostants.apiKey,
    gallery_id: apiCostants.galleryId,
    format: apiCostants.format,
    nojsoncallback: apiCostants.noJsonCallback,
  };
};
