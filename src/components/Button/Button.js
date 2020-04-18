import React from 'react';
import { Image } from 'react-native';

import sdd from '~/assets/images/Rolling.gif';
import { TextButton, ButtonStyle } from './Button.styles';

export default function ButtonDefault(props) {
  return (
    <ButtonStyle onPress={props.onPress}>
      {!props.loading ? (
        <TextButton>{props.title}</TextButton>
      ) : (
        <TextButton>...</TextButton>
      )}
    </ButtonStyle>
  );
}
