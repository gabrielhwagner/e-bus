import styled from 'styled-components/native';

import { azulDois } from '~/assets/css/Colors';

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${azulDois};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${azulDois};
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${azulDois};
`;

const Buttons = styled.View`
  width: 80;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.View`
  width: 60;
  height: 60;
  border-radius: 100;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

const Informations = styled.View`
  flex: 1;
`;

export {
  Container,
  Title,
  Description,
  Buttons,
  Informations,
  SubTitle,
  Button,
};
