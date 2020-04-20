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
  Content,
} from './ItineraryCard.styles';

export default function ItineraryCard(props) {
  return (
    <Container>
      <Content isPassenger={props.isPassenger}>
        <Title>
          {props.itinerary.turno} - {props.itinerary.horarioInicio}
        </Title>
        <Description>{props.itinerary.descricao}</Description>
        {props.itinerary.numeroPassageiros && (
          <Passenger>
            <Description>
              Passageiros: {props.itinerary.numeroPassageiros}
            </Description>
          </Passenger>
        )}
      </Content>
      <Buttons
        center={props.itinerary.status === 'CONCLUIDO' || props.isPassenger}>
        {props.itinerary.status === 'NAO_INICIADO' && (
          <>
            {props.onPassenger && (
              <Button color={azul}>
                <Icon
                  onPress={props.onPassenger}
                  name={'users'}
                  size={32}
                  color={'#ffffff'}
                />
              </Button>
            )}
            {props.onPreview && (
              <Button color={verde}>
                <Icon
                  onPress={props.onPreview}
                  name={'direction'}
                  size={32}
                  color={'#ffffff'}
                />
              </Button>
            )}
            {props.isPassenger && (
              <Button color="transparent">
                <Icon
                  onPress={props.onPreview}
                  name={'clock'}
                  size={60}
                  color={azul}
                />
              </Button>
            )}
          </>
        )}
        {props.itinerary.status === 'ATIVO' && props.onLocation && (
          <Button color={azul}>
            <Icon
              onPress={props.onLocation}
              name={'location'}
              size={32}
              color={'#ffffff'}
            />
          </Button>
        )}
        {props.itinerary.status === 'CONCLUIDO' && (
          <Button color={verdeDois}>
            <Icon name={'check'} size={32} color={'#ffffff'} />
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
