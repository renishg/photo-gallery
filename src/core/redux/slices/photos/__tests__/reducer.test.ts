import {mockGetPhotosResponse} from 'src/utils/testUtils/mocks';
import {photosActions} from '../actions';
import {PhotosState, photosReducer} from '../reducer';

describe('#reducer', () => {
  let initialState: PhotosState;

  beforeEach(() => {
    initialState = {
      isLoading: false,
    };
  });

  it('should update isLoading state', () => {
    const isLoading = true;
    const nextState = photosReducer(
      initialState,
      photosActions.setLoading(isLoading),
    );
    expect(nextState.isLoading).toBe(isLoading);
  });

  it('should reset isLoading state', () => {
    const nextState = photosReducer(initialState, photosActions.reset());
    expect(nextState.isLoading).toBeFalsy();
  });

  it('should call fetchPhotos pending state', () => {
    const nextState = photosReducer(
      initialState,
      photosActions.fetchPhotos.pending('', undefined, ''),
    );
    expect(nextState.isLoading).toBeTruthy();
  });

  it('should call fetchPhotos fulfilled state', () => {
    const nextState = photosReducer(
      initialState,
      photosActions.fetchPhotos.fulfilled(mockGetPhotosResponse, '', undefined),
    );
    expect(nextState.isLoading).toBeFalsy();
  });

  it('should call fetchPhotos rejected state', () => {
    const error = 'Something went wrong';
    const nextState = photosReducer(
      initialState,
      photosActions.fetchPhotos.rejected(null, '', undefined, error),
    );
    expect(nextState.error).toBe(error);
  });
});
