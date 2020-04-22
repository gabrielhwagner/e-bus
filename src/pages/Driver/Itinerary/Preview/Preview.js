import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { observer, inject } from 'mobx-react';

import { MapViewDiretions, Button } from '~/components';
import { getPixelSize } from '~/utils';
import { getDadosItinerario } from '~/mocks/Itinerarios';
import { azul, dark } from '~/assets/css/Colors';
import iconPassenger from '~/assets/images/marker.png';
import iconUm from '~/assets/images/icon-college.png';

@inject('store')
@observer
class Preview extends Component {
  constructor(props) {
    super(props);
    this.driverStore = props.store.DriverStore;
    this.state = {
      userLocation: null,
      getIsComplete: false,
      itinerary: null,
    };
    this.mapView;
  }

  async componentDidMount() {
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        const userLocation = { latitude, longitude };
        this.setLocations(userLocation);
      },
      () => {},
      {
        maximumAge: 3600000,
        enableHighAccuracy: true,
        distanceFilter: 50,
      },
    );
  }

  searchItineraryPoints = async () => {
    try {
      await this.driverStore.searchItineraryPointsService();
      this.setState({ getIsComplete: true });
    } catch (err) {
      this.setState({
        getIsComplete: true,
      });
    }
  };

  async setLocations(userLocation) {
    this.setState({ userLocation });
    if (!this.state.getIsComplete) {
      this.searchItineraryPoints();
    }
  }

  componentWillUnmount() {
    Geolocation.stopObserving();
  }

  onReady = result => {
    const distance = result.distance;
    const duration = result.duration / 60;

    this.setState({
      itinerary: {
        distance: distance.toFixed(2),
        duration: duration.toFixed(2),
      },
    });

    this.mapView.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: getPixelSize(30),
        bottom: getPixelSize(60),
        left: getPixelSize(30),
        top: getPixelSize(0),
      },
    });
  };

  startItinerary() {
    Alert.alert(
      'Deseja iniciar o itinerário?',
      '',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Iniciar',
          onPress: () => this.props.navigation.navigate('Go'),
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    const { itinerarySelected } = this.driverStore;
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled
          showsUserLocation>
          {this.state.getIsComplete && (
            <>
              <MapViewDiretions
                origin={this.state.userLocation}
                waypoints={itinerarySelected.points}
                destination={itinerarySelected.finalPoint}
                optimizeWaypoints={false}
                onStart={() => {}}
                onReady={this.onReady}
              />
              {itinerarySelected.points.map(({ id, nome, tipo, endereco }) => (
                <Marker
                  key={id}
                  coordinate={{
                    latitude: Number(endereco.latitude),
                    longitude: Number(endereco.longitude),
                  }}
                  image={iconPassenger}
                  title={nome}
                  description={tipo}
                />
              ))}
              <Marker
                coordinate={{
                  latitude: Number(
                    itinerarySelected.finalPoint.endereco.latitude,
                  ),
                  longitude: Number(
                    itinerarySelected.finalPoint.endereco.longitude,
                  ),
                }}
                image={iconUm}
                title={itinerarySelected.finalPoint.nome}
                description={itinerarySelected.finalPoint.tipo}
              />
            </>
          )}
        </MapView>
        {this.state.itinerary !== null && (
          <View style={styles.description}>
            <View>
              <Text style={styles.title}>
                Nome:
                <Text style={styles.response}>
                  {' '}
                  {itinerarySelected.descricao}
                </Text>
              </Text>
              <Text style={styles.title}>
                Tempo médio:
                <Text style={styles.response}>
                  {' '}
                  {this.state.itinerary.duration} h
                </Text>
              </Text>
              <Text style={styles.title}>
                Distância total:
                <Text style={styles.response}>
                  {' '}
                  {this.state.itinerary.distance} km
                </Text>
              </Text>
            </View>
            <Button
              style={styles.button}
              onPress={() => this.startItinerary()}
              title="Iniciar"
            />
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
});

export default Preview;
