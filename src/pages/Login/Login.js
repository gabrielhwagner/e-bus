import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  AsyncStorage,
} from 'react-native';

import { observer, inject } from 'mobx-react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

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

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = await AsyncStorage.getItem('@CodeApi:user');
    if (token && user) {
      console.log('LOGADO');
      this.authStore.setAuth(JSON.parse(user), token);
      this.props.navigation.navigate('Main');
    }
  }

  login = async () => {
    try {
      console.log('LOGIN');
      this.setState({ loading: true });
      const { email, password } = this.authStore;

      const { data } = await AuthService.login(email, password);
      await AsyncStorage.multiSet([
        ['@CodeApi:token', data.token],
        ['@CodeApi:user', JSON.stringify(data.user)],
      ]);
      this.setState({ loading: false });
      this.authStore.setAuth(data.user, data.token);
      this.props.navigation.navigate('Main');
    } catch (err) {
      if (err.status === 401) {
        Alert.alert('Usuário ou senha inválidos');
      }
      this.setState({ loading: false });
    }
  };

  oneSignal() {
    OneSignal.init('663fdab3-c2bc-4170-9669-7e25c87bdd0e', {
      kOSSettingsKeyAutoPrompt: true,
    });
    OneSignal.addEventListener('ids', res => console.log('DSADASD', res));
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={dark} />
        <KeyboardAvoidingView>
          <Input
            value={this.authStore.email}
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
