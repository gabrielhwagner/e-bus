import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { observer, inject } from 'mobx-react';

import { getDateNowBR } from '~/utils';
import { Header, ItineraryCard } from '~/components';
import {
  Container,
  Item,
  Date,
  EmptyMessage,
  Background,
} from './Itinerary.styles';
import background from '~/assets/images/background/menor.jpg';

@inject('store')
@observer
class Itinerary extends Component {
  constructor(props) {
    super();
    this.passengerStore = props.store.PassengerStore;
    this.state = {
      loading: true,
      return: false,
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
      await this.passengerStore.searchItineraryService();
      this.setState({
        loading: false,
        return: true,
      });
    } catch (err) {
      this.setState({
        loading: false,
        return: true,
      });
    }
  };

  onLocation = id => {
    this.passengerStore.setItinerarySelected(id);
    this.props.navigation.navigate('Location');
  };

  render() {
    return (
      <Container>
        <Background resizeMode={'cover'} source={background} />
        <Header title="Itinerário" />
        <Date>{getDateNowBR()}</Date>
        <FlatList
          data={this.passengerStore.itineraries}
          keyExtractor={itinerary => String(itinerary.id)}
          onRefresh={this.searchItineraryService}
          refreshing={this.state.loading}
          ListEmptyComponent={
            this.state.return && (
              <EmptyMessage>Você não possui itinerário hoje</EmptyMessage>
            )
          }
          renderItem={({ item }) => (
            <Item>
              <View style={styles.shadow}>
                <ItineraryCard
                  isPassenger
                  onLocation={() => this.onLocation(item.id)}
                  itinerary={item}
                />
              </View>
            </Item>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 6,
  },
});

export default Itinerary;
