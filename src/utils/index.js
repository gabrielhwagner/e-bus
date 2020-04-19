import { Platform, PixelRatio } from 'react-native';

function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  });
}

const GOOGLE_KEY = 'AIzaSyAdKYWYO_o_v7ov3qYQu5l_5Qcm3-WJ3T4';
const URL_API = 'https://ebus-backend.herokuapp.com';

export { getPixelSize, GOOGLE_KEY, URL_API };
