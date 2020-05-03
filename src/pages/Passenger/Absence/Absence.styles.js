import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { background, azul } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  background-color: ${background};
`;

const Background = styled.ImageBackground`
  width: 100%;
  height: 300;
  position: absolute;
`;

const Item = styled.View`
  padding: 0 18px;
  margin-bottom: 15px;
`;

const Date = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  padding: 0 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const EmptyMessage = styled.Text`
  width: ${Dimensions.get('window').width - 40};
  color: ${azul};
  margin: auto;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5;
`;

export { Container, Item, Date, EmptyMessage, Background };
