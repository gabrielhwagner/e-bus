import React, { Component } from 'react';
import { FlatList, Alert, StyleSheet, View } from 'react-native';
import { observer, inject } from 'mobx-react';

import { getDateNowBR } from '~/utils';
import { Header, PassengerCard } from '~/components';
import {
  Container,
  Item,
  Title,
  EmptyMessage,
  Background,
} from './PassengerList.styles';
import background from '~/assets/images/background/menor.jpg';

@inject('store')
@observer
class PassengerList extends Component {
  constructor(props) {
    super();
    this.driverStore = props.store.DriverStore;
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.searchPassengerService();
  }

  searchPassengerService = async () => {
    try {
      this.setLoading(true);
      await this.driverStore.searchPassengerService();
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
    }
  };

  openAlert(id, name) {
    Alert.alert(
      this.driverStore.itinerarySelected.descricao,
      `Deseja remover ${name}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => this.removePassenger(id),
        },
      ],
      { cancelable: false },
    );
  }

  async removePassenger(id) {
    try {
      this.setLoading(true);
      await this.driverStore.removePassengerService(id, 'MOTORISTA');
      this.searchPassengerService();
    } catch (err) {
      this.setLoading(false);
    }
  }

  setLoading = status => {
    this.setState({
      loading: status,
    });
  };

  render() {
    return (
      <Container>
        <Background resizeMode={'cover'} source={background} />
        <Header title="Passageiros" />
        <Title>{`${
          this.driverStore.itinerarySelected.descricao
        } - ${getDateNowBR()}`}</Title>
        <FlatList
          data={this.driverStore.itinerarySelected.passengers}
          keyExtractor={passenger => String(passenger.id)}
          onRefresh={this.searchPassengerService}
          refreshing={this.state.loading}
          ListEmptyComponent={
            <EmptyMessage>Esse itinerário não possui passageiros</EmptyMessage>
          }
          renderItem={({ item }) => (
            <Item>
              <View style={styles.description}>
                <PassengerCard
                  onRemove={() => this.openAlert(item.id, item.nome)}
                  passenger={item}
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
  description: {
    backgroundColor: '#ffffff',
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

export default PassengerList;
