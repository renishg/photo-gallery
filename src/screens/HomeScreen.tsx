import React, {useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {usePhotos} from 'src/hooks';

export const HomeScreen = () => {
  const {isLoading, fetchPhotos, photos} = usePhotos();

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <>
      <Text>{photos.length}</Text>
    </>
  );
};
