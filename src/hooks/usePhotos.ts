import {useCallback} from 'react';
import {
  photosActions,
  photosSelectors,
  useAppDispatch,
  useAppSelector,
} from 'src/core/redux';
import {useNetwork} from './useNetwork';
import {Photo} from 'src/core/realm/schema';
import {useRealmCollection} from './useRealmCollection';

export const usePhotos = () => {
  const {isConnected} = useNetwork();
  const isLoading = useAppSelector(photosSelectors.isLoading);
  const error = useAppSelector(photosSelectors.error);
  const {data: photos, insertAll} = useRealmCollection(Photo);

  const dispatch = useAppDispatch();

  const fetchPhotos = useCallback(() => {
    if (isConnected) {
      dispatch(photosActions.fetchPhotos())
        .unwrap()
        .then(({photos: {photo}}) => {
          insertAll(photo);
        });
    }
  }, [dispatch, insertAll, isConnected]);

  return {
    isLoading,
    error,
    photos,
    fetchPhotos,
  };
};
