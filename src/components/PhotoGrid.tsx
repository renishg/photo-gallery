import React, {FC, useCallback} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {Photo} from 'src/core/api/types';
import {Thumbnail} from './Thumbnail';

type Props = {
  data: Photo[];
  totalColumns?: number;
  onItemPress: (item: Photo) => void;
  refreshing?: FlatListProps<Photo>['refreshing'];
  onRefresh?: FlatListProps<Photo>['onRefresh'];
  ListHeaderComponent?: FlatListProps<Photo>['ListHeaderComponent'];
};

const PhotoGrid: FC<Props> = ({
  data,
  totalColumns,
  refreshing,
  onRefresh,
  onItemPress,
  ListHeaderComponent,
}) => {
  const renderItem: ListRenderItem<Photo> = useCallback(
    ({item}) => {
      return (
        <Thumbnail
          item={item}
          totalColumns={totalColumns}
          onItemPress={onItemPress}
        />
      );
    },
    [onItemPress, totalColumns],
  );

  return (
    <FlatList
      numColumns={totalColumns}
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      onRefresh={onRefresh}
      refreshing={refreshing}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});

export {PhotoGrid};
