import type {RootState} from '../../store';

const isLoading = (state: RootState) => state.photos.isLoading;

export const photosSelectors = {
  isLoading,
};
