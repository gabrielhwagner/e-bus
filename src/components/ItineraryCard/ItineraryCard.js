import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { verde, verdeDois, azul } from '~/assets/css/Colors';

import {
  Container,
  Title,
  Description,
  Passenger,
  Buttons,
  Button,
} from './ItineraryCard.styles';

export default function ItineraryCard(props) {
  return (
    <Container>
      <View>
        <Title>
          {props.itinerary.turno} - {props.itinerary.horarioInicio}
        </Title>
        <Description>{props.itinerary.descricao}</Description>
        <Passenger>
          <Description>
            Passageiros: {props.itinerary.numeroPassageiros}
          </Description>
        </Passenger>
      </View>
      <Buttons center={props.itinerary.status !== 'PENDENTE'}>
        {props.itinerary.status === 'PENDENTE' ? (
          <>
            <Button color={azul}>
              <Icon
                onPress={props.onPassenger}
                name={'users'}
                size={32}
                color={'#ffffff'}
              />
            </Button>
            <Button color={verde}>
              <Icon
                onPress={props.onPreview}
                name={'direction'}
                size={32}
                color={'#ffffff'}
              />
            </Button>
          </>
        ) : (
          <Button color={verdeDois}>
            <Icon name={'check'} size={32} color={'#ffffff'} />
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
