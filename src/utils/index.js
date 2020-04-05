import { Platform, PixelRatio } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  });
}

function getCurrentPosition() {
  return new Promise((res, rej) => {
    debugger;
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log('>>>>>', latitude, longitude);
        res({
          latitude,
          longitude,
        });
      },
      () => {},
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  });
}

const GOOGLE_KEY = 'AIzaSyAdKYWYO_o_v7ov3qYQu5l_5Qcm3-WJ3T4';

export { getPixelSize, GOOGLE_KEY, getCurrentPosition };
