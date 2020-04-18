import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StatusBar, Text } from 'react-native';
import { observer, inject } from 'mobx-react';

import ButtonDefault from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import { dark } from '~/assets/css/Colors';
import { Container } from './Login.styles';

@inject('store')
@observer
class Login extends Component {
  render() {
    console.log('cdsdf', this.props.store.AuthStore.title);
    return (
      <Container>
        <StatusBar barStyle="light-content" tin backgroundColor={dark} />
        <KeyboardAvoidingView>
          <Input value={'user'} error name="Usuário" onChange={() => {}} />
          <Input value={'password'} name="Senha" onChange={() => {}} />
          <ButtonDefault onPress={() => {}} title="Entrar" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login;
