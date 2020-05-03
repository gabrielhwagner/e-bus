import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import { getDateNowBR, getDateNow } from '~/utils';
import { Header, ItineraryCard } from '~/components';
import {
  Container,
  Item,
  Date,
  EmptyMessage,
  Background,
} from './Absence.styles';
import background from '~/assets/images/menor.png';

@inject('store')
@observer
class Absence extends Component {
  constructor(props) {
    super();
    this.passengerStore = props.store.PassengerStore;
    this.state = {
      loading: true,
      return: false,
      show: false,
      date: dayjs(),
      dateVisible: getDateNowBR(),
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
      await this.passengerStore.searchItineraryService(
        getDateNow(this.state.date),
      );
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

  async removePassenger(id) {
    try {
      this.setState({
        loading: true,
      });
      await this.passengerStore.removePassengerService(
        id,
        getDateNow(this.state.date),
        'PASSAGEIRO',
      );
      this.searchItineraryService();
    } catch (err) {
      this.setState({
        loading: false,
      });
    }
  }

  openAlert(id) {
    Alert.alert(
      'Olá',
      `Deseja informar ausência no dia ${this.state.dateVisible}?`,
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

  setDate = (event, selectedDate) => {
    this.setState(
      {
        show: false,
        date: selectedDate || this.state.date,
        dateVisible: getDateNowBR(selectedDate),
      },
      () => {
        this.searchItineraryService();
      },
    );
  };

  render() {
    return (
      <Container>
        <Background resizeMode={'cover'} source={background} />
        <Header title="Ausência" />
        <Date onPress={() => this.setState({ show: true })}>
          {`Selecione o dia: ${this.state.dateVisible}`}
        </Date>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={Number(this.state.date)}
            minimumDate={Number(dayjs())}
            mode={'date'}
            is24Hour={true}
            display="default"
            textColor={'#878515'}
            style={{
              backgroundColor: '#000',
              color: '#878515',
            }}
            onChange={this.setDate}
          />
        )}
        <FlatList
          data={this.passengerStore.itineraries}
          keyExtractor={itinerary => String(itinerary.id)}
          onRefresh={this.searchItineraryService}
          refreshing={this.state.loading}
          ListEmptyComponent={
            this.state.return && (
              <EmptyMessage>Você não possui itinerário</EmptyMessage>
            )
          }
          renderItem={({ item }) => (
            <Item>
              <View style={styles.shadow}>
                <ItineraryCard
                  isPassenger
                  onRemovePassenger={() => this.openAlert(item.id)}
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

export default Absence;
