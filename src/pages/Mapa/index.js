import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const Mapa = () => (
  <View style={styles.container}>
    <MapView
      style={styles.mapView}
      loadingEnabled={true}
      onPress={({target}) => console.log(target)}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title={'teste'}
        description={'testee'}
      />
    </MapView>
    <TextInput style={styles.teste}>Teste</TextInput>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default Mapa;
