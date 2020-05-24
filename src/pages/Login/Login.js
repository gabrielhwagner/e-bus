import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  AsyncStorage,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import { PermissionsAndroid } from 'react-native';
import { Toast, Root } from 'native-base';

import AuthService from '~/services/AuthService';
import ButtonDefault from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import { dark } from '~/assets/css/Colors';
import { Container, Content, Background, Image } from './Login.styles';
import background from '~/assets/images/background/background.jpg';
import icon from '~/assets/images/icon.png';

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
      this.authStore.setAuth(JSON.parse(user), token);
      this.props.navigation.navigate('Main');
    }
  }

  validateLocation = async () => {
    const chckLocationPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      this.login();
    } else {
      const response = await this.requestLocation();
      if (response) {
        this.login();
      } else {
        this.alert('O app precisa de sua localização!');
      }
    }
  };

  alert = message => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      type: 'danger',
    });
  };

  login = async () => {
    try {
      this.setState({ loading: true });
      const { email, password } = this.authStore;

      const { data } = await AuthService.login(email, password);
      await AsyncStorage.multiSet([
        ['@CodeApi:token', data.token],
        ['@CodeApi:user', JSON.stringify(data.user)],
      ]);
      this.setOneSignal();
      this.setState({ loading: false });
      this.authStore.setAuth(data.user, data.token);
      this.props.navigation.navigate('Main');
    } catch (err) {
      this.alert('Usuário ou senha inválidos');
      this.setState({ loading: false });
    }
  };

  requestLocation = async () => {
    try {
      const response = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return response === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
    }
  };

  setOneSignal() {
    OneSignal.init('663fdab3-c2bc-4170-9669-7e25c87bdd0e');
    OneSignal.addEventListener('ids', ({ userId }) => {
      AuthService.setPlayerId(userId);
    });
  }

  render() {
    return (
      <Root>
        <Background resizeMode={'cover'} source={background}>
          <Container>
            <StatusBar barStyle="light-content" backgroundColor={dark} />
            <KeyboardAvoidingView>
              <Image resizeMode={'contain'} source={icon} />
              <Content>
                <Input
                  value={this.authStore.email}
                  name="E-mail"
                  onChange={value =>
                    this.authStore.onChangeInputs('email', value)
                  }
                />
                <Input
                  value={this.authStore.password}
                  name="Senha"
                  onChange={value =>
                    this.authStore.onChangeInputs('password', value)
                  }
                  secureTextEntry
                />
                <ButtonDefault
                  onPress={() => this.validateLocation()}
                  title="Entrar"
                  loading={this.state.loading}
                />
              </Content>
            </KeyboardAvoidingView>
          </Container>
        </Background>
      </Root>
    );
  }
}

export default Login;
