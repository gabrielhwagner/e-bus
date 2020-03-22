import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StatusBar, Text } from 'react-native';

import ButtonDefault from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import { dark } from '~/assets/css/Colors';
import { Container } from './Login.styles';

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('Bla');
  const [password, setPassword] = useState('');
  function login() {
    navigation.navigate('Main');
    // if (user === 'admin' && password === '123') {
    // }
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" tin backgroundColor={dark} />
      <KeyboardAvoidingView>
        <Input value={user} error name="Usuário" onChange={setUser} />
        <Input value={password} name="Senha" onChange={setPassword} />
        <ButtonDefault onPress={login} title="Entrar" />
      </KeyboardAvoidingView>
    </Container>
  );
}

// onPress={() => navigation.navigate('Main')}
