import styled from 'styled-components/native';

import {
  darkDois,
  azul,
  verde,
  azulDois,
  verdeDois,
  wh,
} from '~/assets/css/Colors';

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${darkDois};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5;
`;

const Content = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: ${({ isPassenger }) => (isPassenger ? 'auto' : '70px')};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

const Passenger = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

const Buttons = styled.View`
  width: 140;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'flex-end' : 'space-between')};
`;

const Button = styled.View`
  width: 60;
  height: 60;
  border-radius: 100;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export { Container, Title, Description, Buttons, Passenger, Button, Content };
