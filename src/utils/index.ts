import {API_CONSTANTS} from 'src/core/api/constants';
import {Photo} from 'src/core/api/types';

export const getImageUri = (photo: Photo) => {
  const {farm, server, id, secret} = photo;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

export const getCommonQueryParams = () => {
  return {
    api_key: API_CONSTANTS.apiKey,
    gallery_id: API_CONSTANTS.galleryId,
    format: API_CONSTANTS.format,
    nojsoncallback: API_CONSTANTS.noJsonCallback,
  };
};
