import React from 'react';
import { View } from 'react-native';

type MarginProps = {
    height: number;
}

export default (props: MarginProps) => {
  return <View style={{ height: props.height }} />;
}