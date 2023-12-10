import {RootState} from '../../store';

const isLoading = (state: RootState) => state.photos.isLoading;
const error = (state: RootState) => state.photos.error;

export const photosSelectors = {
  isLoading,
  error,
};
