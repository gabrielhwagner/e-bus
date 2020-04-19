import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';

import { Header, PassengerCard } from '~/components';
import { Container, Item, Title } from './PassengerList.styles';
import { getPassageirosItinerario } from '~/mocks/Itinerarios';

export default function PassengerList() {
  const [passengers, setPassengers] = useState(getPassageirosItinerario());

  function removePassenger(id) {
    const newList = passengers.passageiros.filter(
      passenger => passenger.id !== id,
    );
    setPassengers({
      ...passengers,
      passageiros: newList,
    });
  }

  function openAlert(id, name) {
    Alert.alert(
      passengers.descricao,
      `Deseja remover ${name}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => removePassenger(id),
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <Container>
      <Header title="Passageiros" />
      <Title>{passengers.descricao} - 15/05</Title>
      <ScrollView>
        {passengers.passageiros.map(passenger => (
          <Item key={passenger.id}>
            <PassengerCard
              onRemove={() => openAlert(passenger.id, passenger.nome)}
              passenger={passenger}
            />
          </Item>
        ))}
      </ScrollView>
    </Container>
  );
}
