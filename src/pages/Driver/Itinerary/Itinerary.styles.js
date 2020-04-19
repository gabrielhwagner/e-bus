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

export { Container, Item };
