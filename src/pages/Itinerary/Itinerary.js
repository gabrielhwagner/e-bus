import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '~/components';
import { Container } from './Itinerary.styles';

export default function Itinerary() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Itinerario" />
      <Text>Itinerario</Text>
      <ScrollView>
        <Button
          title="Ver passageiros"
          onPress={() => navigation.navigate('PassengerList')}
        />
        <Button
          title="Ver rota"
          onPress={() => navigation.navigate('Preview')}
        />
      </ScrollView>
    </Container>
  );
}
