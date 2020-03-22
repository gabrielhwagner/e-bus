import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';

import { getPixelSize } from '~/utils';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
    };
    this.mapView;
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log('getCurrentPosition');
        this.setState({
          region: {
            latitude,
            longitude,
          },
        });
      },
      () => {},
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );

    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState({
          region: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });
      },
      () => {},
      {
        maximumAge: 0,
        enableHighAccuracy: true,
        distanceFilter: 50,
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled
          showsUserLocation
          onPress={({ target }) => console.log(target)}>
          <Marker
            coordinate={{
              latitude: -30.070302,
              longitude: -51.204392,
            }}
            title={'teste'}
            description={'testee'}
          />
          {this.state.region !== null && (
            <MapViewDirections
              origin={this.state.region}
              waypoints={[
                {
                  latitude: -30.070302,
                  longitude: -51.204392,
                },
              ]}
              destination={{
                latitude: -30.028021,
                longitude: -51.161809,
              }}
              apikey={'AIzaSyAdKYWYO_o_v7ov3qYQu5l_5Qcm3-WJ3T4'}
              strokeWidth={3}
              strokeColor={'#222'}
              precision={'high'}
              resetOnChange={false}
              optimizeWaypoints={false}
              onStart={call => {
                console.log('onStart', call);
              }}
              onReady={result => {
                console.log('onReady', result);
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixelSize(30),
                    bottom: getPixelSize(30),
                    left: getPixelSize(30),
                    top: getPixelSize(30),
                  },
                });
              }}
            />
          )}
        </MapView>
      </View>
    );
  }
}
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
