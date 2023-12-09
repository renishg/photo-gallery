import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
  top: number;
};

export const OwnerText: FC<Props> = ({text, top}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, {top}])}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
  },
  text: {
    fontSize: 10,
    color: 'black',
  },
});
