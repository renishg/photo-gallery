import {mockGetPhotosResponse} from 'src/utils/testUtils/mocks';
import {getCommonQueryParams, getImageUri} from '../index';
import {API_CONSTANTS} from 'src/core/api/constants';

describe('utils', () => {
  it('should get Image Uri', async () => {
    const item = mockGetPhotosResponse.photos.photo[0];

    const uri = getImageUri(item);

    expect(uri).toBe(
      `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
    );
  });

  it('should get common query params', async () => {
    const commonQueryParams = getCommonQueryParams();
    expect(commonQueryParams.api_key).toBe(API_CONSTANTS.apiKey);
    expect(commonQueryParams.format).toBe(API_CONSTANTS.format);
    expect(commonQueryParams.gallery_id).toBe(API_CONSTANTS.galleryId);
    expect(commonQueryParams.nojsoncallback).toBe(API_CONSTANTS.noJsonCallback);
  });
});
