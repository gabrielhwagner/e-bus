import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { observer, inject } from 'mobx-react';

import { getDateNow } from '~/utils';
import ItineraryService from '~/services/ItineraryService';
import iconPassenger from '~/assets/images/marker.png';
import iconCar from '~/assets/images/icon-car.png';

@inject('store')
@observer
class Location extends Component {
  constructor(props) {
    super(props);
    this.itineraryService = ItineraryService;
    this.passengerStore = props.store.PassengerStore;
    this.state = {
      driverLocation: null,
    };
    this.interval = setInterval(() => this.searchLocationDriver(), 10000);
  }

  componentDidMount() {
    this.searchLocationDriver();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  searchLocationDriver() {
    const dateNow = getDateNow();
    const { id } = this.passengerStore.itinerarySelected;

    this.itineraryService
      .searchLocationDriver(id, dateNow)
      .then(({ data }) => {
        const driverLocation = {
          latitude: Number(data.latitude),
          longitude: Number(data.longitude),
        };

        this.setState({ driverLocation }, () => {
          this.setCamera();
        });
      })
      .catch(err => {
        console.log('err', err);
        throw err;
      });
  }

  setCamera() {
    const camera = {
      center: this.state.driverLocation,
      pitch: 40,
      zoom: 18,
    };
    this.mapView.animateCamera(camera);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled>
          {this.state.driverLocation !== null && (
            <Marker
              coordinate={{
                latitude: this.state.driverLocation.latitude,
                longitude: this.state.driverLocation.longitude,
              }}
              icon={iconCar}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default Location;
