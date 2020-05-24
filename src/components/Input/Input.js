import React from 'react';
import { View } from 'react-native';
import { Item, Input, Label } from 'native-base';

import { verdeDois } from '~/assets/css/Colors';
import { Container } from './Input.styles';

export default function InputText(props) {
  return (
    <Container>
      <Item floatingLabel erro={props.error}>
        <Label style={{ color: verdeDois }}>{props.name}</Label>
        <Input
          style={{
            color: '#000000',
            borderBottomColor: '#fff',
          }}
          secureTextEntry={props.secureTextEntry}
          onChangeText={e => props.onChange(e)}
        />
      </Item>
    </Container>
  );
}
