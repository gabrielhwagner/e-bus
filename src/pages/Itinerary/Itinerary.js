import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header, ItineraryCard } from '~/components';
import { Container, Item } from './Itinerary.styles';
import { getItinarios } from '~/mocks/Itinerarios';

export default function Itinerary() {
  const navigation = useNavigation();

  const itinerarys = getItinarios();
  return (
    <Container>
      <Header title="Itinerario" />
      <ScrollView>
        {itinerarys.map(itinerary => (
          <Item>
            <ItineraryCard
              onPreview={() => navigation.navigate('Preview')}
              onPassenger={() => navigation.navigate('PassengerList')}
              itinerary={itinerary}
            />
          </Item>
        ))}
      </ScrollView>
    </Container>
  );
}
