import React from 'react';
import { StatusBar } from 'react-native';

import { background } from '~/assets/css/Colors';
import { Container } from './Main.styles';
import Header from '~/components/Header/Header';

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={background} />
      <Header />
    </Container>
  );
}
