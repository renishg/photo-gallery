import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ErrorText, PhotoGrid} from 'src/components';
import {Photo} from 'src/core/api/types';
import {NavigationProps} from 'src/core/navigation';
import {usePhotos} from 'src/hooks';

const totalColumns = 3;

export const HomeScreen = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {isLoading, error, photos, fetchPhotos} = usePhotos();

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const onItemPress = useCallback(
    (item: Photo) => {
      navigate('PhotoDetail', {item});
    },
    [navigate],
  );

  const ListHeaderComponent = useCallback(() => {
    return error ? <ErrorText text={error} /> : null;
  }, [error]);

  return (
    <View style={styles.container}>
      <PhotoGrid
        refreshing={isLoading}
        onRefresh={fetchPhotos}
        data={[...photos, ...photos]}
        onItemPress={onItemPress}
        totalColumns={totalColumns}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
