import React, {FC} from 'react';
import {Text} from 'react-native';

type Props = {
  text: string;
};

export const MockScreen: FC<Props> = ({text}) => {
  return <Text>{text}</Text>;
};
