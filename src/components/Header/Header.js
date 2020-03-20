import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { verde } from '~/assets/css/Colors';
import { Container, Title } from './Header.styles';

export default function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Icon
        onPress={() => navigation.toggleDrawer()}
        name={'ios-menu'}
        size={22}
        color={verde}
      />
      <Title>Home</Title>
      <Icon name={'ios-notifications-outline'} size={22} color={verde} />
    </Container>
  );
}
