import styled from 'styled-components/native';

import { verde } from '~/assets/css/Colors';

const Container = styled.View`
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60;
  padding-left: 20;
  padding-right: 20;
`;

const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  color: #fff;
`;

export { Container, Title };
