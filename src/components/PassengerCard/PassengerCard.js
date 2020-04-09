import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { red } from '~/assets/css/Colors';

import {
  Container,
  Title,
  Description,
  SubTitle,
  Buttons,
  Informations,
  Button,
} from './PassengerCard.styles';

export default function PassengerCard(props) {
  const address = props.passenger.endereco;
  return (
    <Container>
      <Informations>
        <Title>{props.passenger.nome}</Title>
        <Description>
          <SubTitle>Cidade: </SubTitle>
          {address.cidade}
        </Description>
        <Description>
          <SubTitle>CEP: </SubTitle>
          {address.cep}
        </Description>
        <Description>
          <SubTitle>Bairro: </SubTitle>
          {address.bairro}
        </Description>
        <Description>
          <SubTitle>Logradouro: </SubTitle>
          {address.logradouro}
        </Description>
        <Description>
          <SubTitle>Numero: </SubTitle>
          {address.numero}
        </Description>
        <Description>
          <SubTitle>Complemento: </SubTitle>
          {address.complemento}
        </Description>
      </Informations>
      <Buttons>
        <Button color={red}>
          <Icon
            onPress={props.onRemove}
            name={'remove-user'}
            size={32}
            color={'#ffffff'}
          />
        </Button>
      </Buttons>
    </Container>
  );
}
