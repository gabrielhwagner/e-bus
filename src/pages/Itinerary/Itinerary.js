import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';

import { Header, ItineraryCard } from '~/components';
import { Container, Item } from './Itinerary.styles';
import { getItinarios } from '~/mocks/Itinerarios';

@inject('store')
@observer
class Itinerary extends Component {
  constructor(props) {
    super();
    this.authStore = props.store.AuthStore;
    console.log(this.authStore.isPassenger);
  }

  onPreview = () => {
    this.props.navigation.navigate('Preview');
  };

  onPassenger = () => {
    this.props.navigation.navigate('PassengerList');
  };

  onLocation = () => {
    this.props.navigation.navigate('Location');
  };

  render() {
    const itinerarys = getItinarios();
    return (
      <Container>
        <Header title="Itinerario" />
        <ScrollView>
          {itinerarys.map(itinerary => (
            <Item key={itinerary.id}>
              {this.authStore.isPassenger ? (
                <ItineraryCard
                  onLocation={() => this.onLocation()}
                  itinerary={itinerary}
                />
              ) : (
                <ItineraryCard
                  onPreview={() => this.onPreview()}
                  onPassenger={() => this.onPassenger()}
                  itinerary={itinerary}
                />
              )}
            </Item>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

export default Itinerary;
