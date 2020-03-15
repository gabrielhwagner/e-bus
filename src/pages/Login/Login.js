import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
} from 'react-native';

import ButtonDefault from '~/components/Button/Button';

import { primaryBlue } from '~/assets/css/Colors';
import { Container } from './Login.styles';

export default function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={primaryBlue} />
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <ButtonDefault
          onPress={() => navigation.navigate('Main')}
          title="Entrar"
        />
      </KeyboardAvoidingView>
    </Container>
  );
}

// onPress={() => navigation.navigate('Main')}
