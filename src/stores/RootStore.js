import { AuthStore } from './AuthStore/AuthStore';

class RootStore {
  constructor() {
    this.AuthStore = new AuthStore(this);
  }
}

export default RootStore;
