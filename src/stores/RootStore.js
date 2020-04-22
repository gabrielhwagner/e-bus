import { AuthStore } from './AuthStore/AuthStore';
import { PassengerStore } from './PassengerStore/PassengerStore';
import { DriverStore } from './DriverStore/DriverStore';

class RootStore {
  constructor() {
    this.AuthStore = new AuthStore(this);
    this.PassengerStore = new PassengerStore(this);
    this.DriverStore = new DriverStore(this);
  }
}

export default RootStore;
