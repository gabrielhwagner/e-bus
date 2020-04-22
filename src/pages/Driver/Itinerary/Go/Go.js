import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { observer, inject } from 'mobx-react';

import ItineraryService from '~/services/ItineraryService';

import { getDateTimeNow } from '~/utils';
import { MapViewDiretions, Button } from '~/components';
import { azul, dark } from '~/assets/css/Colors';
import iconPassenger from '~/assets/images/marker.png';
import iconCar from '~/assets/images/icon-car.png';

@inject('store')
@observer
class Go extends Component {
  constructor(props) {
    super(props);
    this.driverStore = props.store.DriverStore;
    this.state = {
      informations: null,
      userLocation: null,
      getIsComplete: false,
      loading: false,
    };
    this.mapView;
  }

  async componentDidMount() {
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        const userLocation = { latitude, longitude };
        this.setState({ userLocation }, () => {
          if (!this.state.getIsComplete) {
            this.startItinerary();
          }
        });
      },
      () => {},
      {
        maximumAge: 3600000,
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  }

  componentWillUnmount() {
    Geolocation.stopObserving();
  }

  async startItinerary() {
    try {
      this.setState({ loading: true });
      await this.driverStore.startItinerary();
      await this.driverStore.orderPoints(this.state.userLocation);
      this.setState({ getIsComplete: true, loading: false });
    } catch (err) {
      this.setState({
        getIsComplete: true,
        loading: false,
      });
      Alert.alert(err);
    }
  }

  onReady = result => {
    const distance = result.distance;
    const duration = result.duration / 60;

    this.setState({
      informations: {
        distance: distance.toFixed(2),
        duration: duration.toFixed(2),
      },
    });

    this.setCamera();
  };

  setCamera() {
    const camera = {
      center: this.state.userLocation,
      pitch: 30,
      zoom: 18,
    };
    this.mapView.setCamera(camera);
    this.saveLocationDriver();
  }

  saveLocationDriver() {
    ItineraryService.saveLocationDriver(
      this.state.userLocation,
      getDateTimeNow(),
      this.driverStore.itineraryStart.id,
    );
  }

  //
  sendNotification() {}

  sendStatusPassenger = async status => {
    this.setState({ loading: true });
    await this.driverStore.saveStorePassenger(status);
    this.setState({ loading: false });
  };

  finishItinerary = async () => {
    this.setState({ loading: true });
    await ItineraryService.finishItinerary(
      this.driverStore.itinerarySelected.id,
      getDateTimeNow(),
    );
    this.setState({ loading: false });
    this.props.navigation.navigate('Itinerary');
  };

  displayAlert() {
    Alert.alert(
      'Concluir Itinerário',
      '',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => this.props.navigation.navigate('Itinerary'),
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled
          followUserLocation={true}
          showsUserLocation>
          {this.state.getIsComplete && (
            <>
              <MapViewDiretions
                origin={this.state.userLocation}
                destination={this.driverStore.passengerActive}
                optimizeWaypoints={false}
                onStart={() => {}}
                onReady={this.onReady}
              />
              <Marker
                coordinate={{
                  latitude: Number(
                    this.driverStore.passengerActive.endereco.latitude,
                  ),
                  longitude: Number(
                    this.driverStore.passengerActive.endereco.longitude,
                  ),
                }}
                title={this.driverStore.passengerActive.nome}
                description={this.driverStore.passengerActive.tipo}
                icon={iconPassenger}
              />
            </>
          )}
        </MapView>

        {this.state.informations !== null && (
          <View style={styles.description}>
            <View>
              <Text style={styles.title}>
                Nome:
                <Text style={styles.response}>
                  {' '}
                  {this.driverStore.passengerActive.nome}
                </Text>
              </Text>
              <Text style={styles.title}>
                Tempo médio:
                <Text style={styles.response}>
                  {' '}
                  {this.state.informations.duration} h
                </Text>
              </Text>
              <Text style={styles.title}>
                Distância total:
                <Text style={styles.response}>
                  {' '}
                  {this.state.informations.distance} km
                </Text>
              </Text>
            </View>
            {this.driverStore.isLastPoint ? (
              <Button
                style={styles.button}
                onPress={() => this.finishItinerary()}
                title="Finalizar"
              />
            ) : (
              <>
                <Button
                  style={styles.button}
                  onPress={() => this.sendStatusPassenger('NAO_EMBARCOU')}
                  title="Não embarcou"
                />
                <Button
                  style={styles.button}
                  onPress={() => this.sendStatusPassenger('EMBARCOU')}
                  title="Embarcou"
                />
              </>
            )}
            {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  description: {
    width: '90%',
    backgroundColor: '#ffffff',
    marginVertical: 10,
    height: 170,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: azul,
  },
  response: {
    fontSize: 18,
    fontWeight: 'bold',
    color: dark,
  },
  button: {
    marginTop: 20,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export default Go;
