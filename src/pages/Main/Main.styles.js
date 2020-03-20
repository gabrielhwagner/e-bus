import styled from 'styled-components/native';

import { dark } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  background-color: ${dark};
`;

const Options = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export { Container, Options };
