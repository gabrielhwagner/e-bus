import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import { dark } from '~/assets/css/Colors';
import { Container, Options } from './Main.styles';
import { Header, Card } from '~/components';

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={dark} />
      <Header />
      <ScrollView>
        <Options>
          <Card />
          <Card />
          <Card />
          <Card />
        </Options>
      </ScrollView>
    </Container>
  );
}
