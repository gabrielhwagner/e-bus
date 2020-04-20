import { AuthStore } from './AuthStore/AuthStore';
import { PassengerStore } from './PassengerStore/PassengerStore';

class RootStore {
  constructor() {
    this.AuthStore = new AuthStore(this);
    this.PassengerStore = new PassengerStore(this);
  }
}

export default RootStore;
