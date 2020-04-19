import axios from './api';
import { URL_API } from '~/utils';

class AuthService {
  login(email, password) {
    const url = `${URL_API}/auth`;
    return axios.post(url, { email, password });
  }
}

export default new AuthService();
