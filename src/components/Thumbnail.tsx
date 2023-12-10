import React, {FC, useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {Photo} from 'src/core/api/types';
import {getImageUri} from 'src/utils';

type Props = {
  item: Photo;
  totalColumns?: number;
  onItemPress?: (item: Photo) => void;
};

const Thumbnail: FC<Props> = ({item, onItemPress, totalColumns}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderViewHeight, setLoaderViewHeight] = useState<number>();

  const source: Source = useMemo(() => {
    return {uri: getImageUri(item), cache: 'immutable'};
  }, [item]);

  const onLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const onLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onPress = useCallback(() => {
    onItemPress?.(item);
  }, [item, onItemPress]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLoaderViewHeight(event.nativeEvent.layout.width);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={onItemPress ? 0.6 : 1}
      onPress={onPress}
      style={StyleSheet.flatten([
        styles.container,
        totalColumns && {flex: 1 / totalColumns},
      ])}
      accessibilityRole={'button'}
      onLayout={onLayout}>
      <FastImage
        source={source}
        style={StyleSheet.flatten([styles.image])}
        resizeMode={'cover'}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onLoadEnd}
      />
      {isLoading && (
        <View
          style={StyleSheet.flatten([
            styles.loadingContainer,
            {height: loaderViewHeight},
          ])}>
          <ActivityIndicator size={totalColumns ? 'small' : 'large'} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    aspectRatio: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
});

export {Thumbnail};
