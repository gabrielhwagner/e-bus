import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import { getDateNowBR } from '~/utils';
import { Header, ItineraryCard } from '~/components';
import { Container, Item, Date, EmptyMessage } from './Itinerary.styles';

@inject('store')
@observer
class Itinerary extends Component {
  constructor(props) {
    super();
    this.driverStore = props.store.DriverStore;
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.searchItineraryService();
  }

  searchItineraryService = async () => {
    try {
      this.setState({
        loading: true,
      });
      await this.driverStore.searchItineraryService();
      this.setState({
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
      });
    }
  };

  onPreview = id => {
    this.driverStore.setItinerarySelected(id);
    this.props.navigation.navigate('Preview');
  };

  onPassenger = id => {
    this.driverStore.setItinerarySelected(id);
    this.props.navigation.navigate('PassengerList');
  };

  render() {
    return (
      <Container>
        <Header title="Itinerário" />
        <Date>{getDateNowBR()}</Date>
        <FlatList
          data={this.driverStore.itineraries}
          keyExtractor={itinerary => String(itinerary.id)}
          onRefresh={this.searchItineraryService}
          refreshing={this.state.loading}
          ListEmptyComponent={
            <EmptyMessage>Você não possui itinerário hoje</EmptyMessage>
          }
          renderItem={({ item }) => (
            <Item>
              <ItineraryCard
                onPreview={() => this.onPreview(item.id)}
                onPassenger={() => this.onPassenger(item.id)}
                itinerary={item}
              />
            </Item>
          )}
        />
      </Container>
    );
  }
}

export default Itinerary;
