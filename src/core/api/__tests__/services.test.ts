import {apiService} from '../services';
import {mockGetPhotosResponse} from 'src/utils/testUtils/mocks';
import {waitFor} from '@testing-library/react-native';

describe('apiService', () => {
  it('should call get photos api', async () => {
    const data = mockGetPhotosResponse;
    await waitFor(async () => {
      const response = await apiService.getPhotos();
      expect(response.data).toBe(data);
    });
  });
});
