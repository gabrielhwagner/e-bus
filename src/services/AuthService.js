import axios from './api';

class AuthService {
  login(email, password) {
    const url = 'https://ebus-backend.herokuapp.com/auth';
    return axios.post(url, { email, password });
  }
}

export default new AuthService();
