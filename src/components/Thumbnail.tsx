import React, {FC, useCallback, useMemo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Photo} from 'src/core/api/types';
import {getImageUri} from 'src/utils';

type Props = {
  item: Photo;
  totalColumns?: number;
  onItemPress?: (item: Photo) => void;
};

const Thumbnail: FC<Props> = ({item, onItemPress, totalColumns = 1}) => {
  const source: ImageSourcePropType = useMemo(() => {
    return {uri: getImageUri(item)};
  }, [item]);

  const onPress = useCallback(() => {
    onItemPress?.(item);
  }, [item, onItemPress]);

  const computedStyle = useMemo(() => {
    return {flex: 1 / totalColumns};
  }, [totalColumns]);

  return (
    <TouchableOpacity
      activeOpacity={onItemPress ? 0.6 : 1}
      onPress={onPress}
      style={computedStyle}
      accessibilityRole={'button'}>
      <Image
        source={source}
        style={StyleSheet.flatten([styles.image])}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});

export {Thumbnail};
