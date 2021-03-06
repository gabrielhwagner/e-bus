import { Platform, PixelRatio } from 'react-native';
import dayjs from 'dayjs';

function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  });
}

function getDateNow(timestamp = undefined) {
  return dayjs(timestamp).format('YYYY-MM-DD');
}

function getDateTimeNow() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}

function getDateNowBR(timestamp = undefined) {
  return dayjs(timestamp).format('DD/MM/YYYY');
}

const GOOGLE_KEY = 'AIzaSyAdKYWYO_o_v7ov3qYQu5l_5Qcm3-WJ3T4';
const URL_API = 'https://ebus-backend.herokuapp.com';

export {
  getPixelSize,
  GOOGLE_KEY,
  URL_API,
  getDateNow,
  getDateNowBR,
  getDateTimeNow,
};
