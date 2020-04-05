import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { MapViewDiretions, Button } from '~/components';
import { getPixelSize } from '~/utils';
import { getDadosItinerario } from '~/mocks/Itinerarios';
import { azul, dark } from '~/assets/css/Colors';

class Go extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      itinerary: null,
      finalLocation: null,
      userLocation: null,
      waypoints: null,
      isComplete: false,
    };
    this.mapView;
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        const userLocation = { latitude, longitude };
        this.setLocations(userLocation);
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
        this.setLocations(userLocation);
      },
      () => {
        Alert.alert('Erro ao buscar a localização');
      },
      {
        maximumAge: 3600000,
        enableHighAccuracy: true,
        distanceFilter: 50,
      },
    );
  }
  //   MapsService.searchOrderWaypoints(
  //     userLocation,
  //     finalLocation.coordinates,
  //     itinerary.locais,
  //   )
  //     .then(res => {
  //       console.log('>>HUSGUDGD', res);
  //     })
  //     .catch(err => {
  //       console.log('>>HUSGUDGD', err);
  //     });
  // }
  setLocations(userLocation) {
    const itinerary = getDadosItinerario();
    this.setState({
      description: itinerary.descricao,
    });
    const finalLocation = itinerary.locais.pop();
    this.setState(
      {
        userLocation,
        waypoints: itinerary.locais,
        finalLocation,
      },
      () => {
        this.setState({
          isComplete: true,
        });
      },
    );
  }

  onReady = result => {
    const distance = result.distance;
    const duration = result.duration / 60;
    console.log('onReady', result);
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

  onStart = r => {
    console.log('onStart', r);
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={styles.mapView}
          loadingEnabled
          showsUserLocation>
          {this.state.isComplete && (
            <>
              <MapViewDiretions
                origin={this.state.userLocation}
                waypoints={this.state.waypoints}
                destination={this.state.finalLocation}
                optimizeWaypoints={false}
                onStart={this.onStart}
                onReady={this.onReady}
              />
              <Marker
                coordinate={{
                  latitude: this.state.finalLocation.coordinates.latitude,
                  longitude: this.state.finalLocation.coordinates.longitude,
                }}
                title={this.state.finalLocation.nome}
                description={this.state.finalLocation.tipo}
              />
            </>
          )}
        </MapView>
        {this.state.itinerary !== null && (
          <View style={styles.description}>
            <View>
              <Text style={styles.title}>
                Nome:
                <Text style={styles.response}> {this.state.description}</Text>
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

export default Go;
