import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';

import AuthService from '~/services/AuthService';
import ButtonDefault from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import { dark } from '~/assets/css/Colors';
import { Container } from './Login.styles';

@inject('store')
@observer
class Login extends Component {
  constructor(props) {
    super();
    this.authStore = props.store.AuthStore;
    this.state = {
      loading: false,
    };
  }

  login = () => {
    this.setState({ loading: true });
    const { email, password } = this.authStore;

    AuthService.login(email, password)
      .then(({ data }) => {
        this.setState({ loading: false });
        console.log('RETORNO', this.authStore);
        this.authStore.setUser(data);
        this.props.navigation.navigate('Main');
      })
      .catch(err => {
        if (err.status === 401) {
          Alert.alert('Usuário ou senha inválidos');
        }
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={dark} />
        <KeyboardAvoidingView>
          <Input
            value={this.authStore.email}
            error
            name="E-mail"
            onChange={value => this.authStore.onChangeInputs('email', value)}
          />
          <Input
            value={this.authStore.password}
            name="Senha"
            onChange={value => this.authStore.onChangeInputs('password', value)}
          />
          <ButtonDefault
            onPress={() => this.login()}
            title="Entrar"
            loading={this.state.loading}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login;
