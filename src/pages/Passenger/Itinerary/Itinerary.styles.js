import styled from 'styled-components/native';

import { dark } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  background-color: ${dark};
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
  color: #ffffff;
  text-align: center;
  font-size: 16px;
`;

export { Container, Item, Date, EmptyMessage };
