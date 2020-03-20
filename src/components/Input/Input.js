import React from 'react';
import { View } from 'react-native';
import { Header, Content, Form, Item, Input, Label } from 'native-base';

import { darkDois } from '~/assets/css/Colors';
import { Container } from './Input.styles';

export default function InputText(props) {
  return (
    <Container>
      <Item floatingLabel erro={props.error}>
        <Label style={{ color: '#fff' }}>{props.name}</Label>
        <Input
          style={{
            color: '#fff',
            borderBottomColor: '#fff',
          }}
          onChangeText={e => props.onChange(e)}
        />
      </Item>
    </Container>
  );
}
