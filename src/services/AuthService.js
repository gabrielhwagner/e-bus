import axios from './api';
import { URL_API } from '~/utils';

class AuthService {
  login(email, password) {
    const url = `${URL_API}/auth`;
    return axios.post(url, { email, password });
  }

  setPlayerId(playerId) {
    const url = `${URL_API}/user/app`;
    return axios.post(url, { playerId });
  }
}

export default new AuthService();
