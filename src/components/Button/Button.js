import React from 'react';

import { TextButton, ButtonStyle } from './Button.styles';

export default function ButtonDefault(props) {
  return (
    <ButtonStyle onPress={props.onPress}>
      <TextButton>{props.title}</TextButton>
    </ButtonStyle>
  );
}
