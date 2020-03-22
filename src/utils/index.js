import { Platform, PixelRatio } from 'react-native';

function getPixelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  });
}

export { getPixelSize };
