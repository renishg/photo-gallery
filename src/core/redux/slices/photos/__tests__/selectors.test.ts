import {photosSelectors} from '../selectors';
import {RootState} from 'src/core/redux';

describe('#selectors', () => {
  let rootState: RootState;

  beforeEach(() => {
    rootState = {
      network: {
        isConnected: false,
      },
      photos: {
        isLoading: false,
        error: 'Something went wrong',
      },
    };
  });

  it('should get error state', () => {
    const error = photosSelectors.error(rootState);
    expect(error).toBe(rootState.photos.error);
  });

  it('should get isLoading state', () => {
    const isLoading = photosSelectors.isLoading(rootState);
    expect(isLoading).toBe(rootState.photos.isLoading);
  });
});
