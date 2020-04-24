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

  sendNotification(title, description, id) {
    const url = `${URL_API}/passenger/${id}/notification`;
    const body = {
      title,
      description,
    };
    return axios.post(url, body);
  }
}

export default new AuthService();
