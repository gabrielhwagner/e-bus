import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { observer, inject } from 'mobx-react';

import { getDateNowBR } from '~/utils';
import { Header, ItineraryCard } from '~/components';
import { Container, Item, Date } from './Itinerary.styles';

@inject('store')
@observer
class Itinerary extends Component {
  constructor(props) {
    super();
    this.passengerStore = props.store.PassengerStore;
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    await this.passengerStore.searchItineraryService();
    this.state = { loading: false };
  }

  onLocation = () => {
    this.props.navigation.navigate('Location');
  };

  render() {
    return (
      <Container>
        <Header title="Itinerário" />
        <Date>{getDateNowBR()}</Date>
        <ScrollView>
          {this.passengerStore.itineraries.map(itinerary => (
            <Item key={itinerary.id}>
              <ItineraryCard
                isPassenger
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
