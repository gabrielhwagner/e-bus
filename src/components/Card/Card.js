import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { verde } from '~/assets/css/Colors';
import { Container } from './Card.styles';

export default function Card() {
  const navigation = useNavigation();
  return <Container />;
}
