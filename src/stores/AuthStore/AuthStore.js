import { observable, action } from 'mobx';

export class AuthStore {
  @observable email = '';
  @observable password = '';

  @observable user = {};

  @action
  onChangeInputs(input, value) {
    this[input] = value;
  }

  @action
  setUser(user) {
    this.user = user;
  }

  get isPassenger() {
    return this.user.tipo === 'PASSAGEIRO';
  }
}
