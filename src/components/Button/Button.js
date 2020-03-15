import { Button } from 'react-native';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { TextButton, ButtonStyle } from './Button.styles';
import { verde, azul } from '~/assets/css/Colors';

export default function ButtonDefault(props) {
  return (
    <ButtonStyle onPress={props.onPress}>
      <LinearGradient
        style={{
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 10,
        }}
        colors={[`${verde}`, `${azul}`]}>
        <TextButton>{props.title}</TextButton>
      </LinearGradient>
    </ButtonStyle>
  );
}
