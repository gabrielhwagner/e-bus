import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { dark } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${dark};
`;

const Content = styled.View`
  width: ${Dimensions.get('window').width - 60};
  background-color: #fff;
  border-radius: 8;
  padding: 10px;
`;

export { Container, Content };
