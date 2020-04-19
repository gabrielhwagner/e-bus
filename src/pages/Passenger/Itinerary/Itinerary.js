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
  }

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
              <ItineraryCard
                onLocation={() => this.onLocation()}
                itinerary={itinerary}
              />
            </Item>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

export default Itinerary;
