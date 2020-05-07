import React from 'react';
import { ActivityIndicator } from 'react-native';

import { TextButton, ButtonStyle } from './Button.styles';

export default function ButtonDefault(props) {
  return (
    <ButtonStyle color={props.color} onPress={props.onPress}>
      {!props.loading ? (
        <TextButton>{props.title}</TextButton>
      ) : (
        <ActivityIndicator size="large" color="#ffffff" />
      )}
    </ButtonStyle>
  );
}
