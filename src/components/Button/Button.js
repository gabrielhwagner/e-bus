import { Button } from 'react-native';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { TextButton, ButtonStyle } from './Button.styles';
import { verde, azul } from '~/assets/css/Colors';

export default function ButtonDefault(props) {
  return (
    <ButtonStyle onPress={props.onPress}>
      <TextButton>{props.title}</TextButton>
    </ButtonStyle>
  );
}
