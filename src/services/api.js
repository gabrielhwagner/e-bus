import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create();

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@CodeApi:token');
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const token = await AsyncStorage.getItem('@CodeApi:token');

    if (error.response.status === 401 && token) {
      await AsyncStorage.clear();
    }

    return Promise.reject(error);
  },
);

export default api;
