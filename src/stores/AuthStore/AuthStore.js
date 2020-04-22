import { observable, action } from 'mobx';

export class AuthStore {
  @observable email = '';
  @observable password = '';

  @observable user = {};
  @observable token = {};

  @action
  onChangeInputs(input, value) {
    this[input] = value;
  }

  @action
  setAuth(user, token) {
    this.token = token;
    this.user = user;
  }

  get isPassenger() {
    return this.user.tipo === 'PASSAGEIRO';
  }
}
