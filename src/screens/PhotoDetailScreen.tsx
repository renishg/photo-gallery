import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {OwnerText, Thumbnail} from 'src/components';
import {Photo} from 'src/core/api/types';
import {NavigationProps, RouteProps} from 'src/core/navigation';

export type PhotoDetailRouteParams = {
  item: Photo;
};

export const PhotoDetailScreen = () => {
  const {
    params: {item},
  } = useRoute<RouteProps<'PhotoDetail'>>();
  const {setOptions} = useNavigation<NavigationProps>();

  useEffect(() => {
    setOptions({
      title: item.title,
    });
  }, [item.title, setOptions]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Thumbnail item={item} />
      </View>
      <OwnerText text={`© ${item.owner}`} top={10} />
      <OwnerText
        text={`${item.ispublic === 0 ? 'Private' : 'Public'}`}
        top={34}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
