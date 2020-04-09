import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapsService from '~/services/DirectionsService';

import { MapViewDiretions, Button } from '~/components';
import { getDadosItinerario } from '~/mocks/Itinerarios';
import { azul, dark } from '~/assets/css/Colors';
import iconPassenger from '~/assets/images/marker.png';
import iconCar from '~/assets/images/icon-car.png';

class Go extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informations: null,
      itinerary: null,
      userLocation: null,
      isComplete: false,
    };
    this.mapView;
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        const userLocation = { latitude, longitude };
        this.setState({ userLocation }, () => {
          this.searchItinerary();
        });
      },
      () => {
        Alert.alert('Erro ao buscar a localização');
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 3600000,
      },
    );
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        const userLocation = { latitude, longitude };
        this.setState({ userLocation }, () => {
          this.searchItinerary();
        });
      },
      () => {
        Alert.alert('Erro ao buscar a localização');
      },
      {
        maximumAge: 3600000,
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  }

  searchItinerary() {
    if (this.state.isComplete) {
      return;
    }
    const itinerary = getDadosItinerario();
    const finalLocation = itinerary.locais.pop();

    MapsService.searchOrderWaypoints(
      this.state.userLocation,
      finalLocation.coordinates,
      itinerary.locais,
    )
      .then(({ data }) => {
        this.setOrderWaypoints(
          itinerary,
          data.routes[0].waypoint_order,
          finalLocation,
        );
      })
      .catch(() => Alert.alert('Erro ao iniciar'));
  }

  setOrderWaypoints(itinerary, order, finalLocation) {
    const itineraryOrder = order.map((point, index) => {
      return {
        ...itinerary.locais[point],
        active: index === 0,
      };
    });
    itineraryOrder.push({ ...finalLocation, active: false });
    console.log(itineraryOrder);
    this.setState({ itinerary: itineraryOrder }, () =>
      this.setState({ isComplete: true }),
    );
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
  }

  get itineraryActive() {
    return this.state.itinerary.find(point => point.active);
  }

  changeItinerary() {
    const pointActiveIndex = this.state.itinerary.findIndex(
      point => point.active,
    );

    if (pointActiveIndex === this.state.itinerary.length - 1) {
      return this.displayAlert();
    }
    this.state.itinerary[pointActiveIndex].active = false;
    this.state.itinerary[pointActiveIndex + 1].active = true;

    this.setState({ itinerary: this.state.itinerary });
  }

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

  onStart = () => {
    console.log('ONSTART');
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled
          followUserLocation={true}
          showsUserLocation>
          {this.state.isComplete && (
            <>
              <MapViewDiretions
                origin={this.state.userLocation}
                destination={this.itineraryActive}
                optimizeWaypoints={false}
                onStart={this.onStart}
                onReady={this.onReady}
              />
              <Marker
                coordinate={this.itineraryActive.coordinates}
                title={this.itineraryActive.nome}
                description={this.itineraryActive.tipo}
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
                  {this.itineraryActive.nome}
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
            {/* <Button
              style={styles.button}
              onPress={() => this.changeItinerary()}
              title="Não embarcou"
            /> */}

            <Button
              style={styles.button}
              onPress={() => this.changeItinerary()}
              title="Embarcou"
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

export default Go;
