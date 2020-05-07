import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { verde } from '~/assets/css/Colors';
import { Container, Title } from './Header.styles';

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Icon
        onPress={() => navigation.toggleDrawer()}
        name={'bars'}
        size={30}
        color={'#fff'}
      />
      <Title>{title}</Title>
      <Icon name={'bell-o'} size={28} color={'transparent'} />
    </Container>
  );
}
