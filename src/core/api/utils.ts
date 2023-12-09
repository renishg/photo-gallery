import {apiCostants} from './constants';

export const getCommonQueryParams = () => {
  return {
    api_key: apiCostants.apiKey,
    gallery_id: apiCostants.galleryId,
    format: apiCostants.format,
    nojsoncallback: apiCostants.noJsonCallback,
  };
};
