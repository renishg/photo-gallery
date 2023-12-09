import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
};

export const ErrorText: FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FF3333',
    padding: 4,
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
});
