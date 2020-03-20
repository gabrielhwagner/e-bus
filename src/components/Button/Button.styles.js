import styled from 'styled-components/native';

import { azul, verde, azulDois, verdeDois } from '~/assets/css/Colors';

const ButtonStyle = styled.TouchableOpacity`
  height: 45;
  border-radius: 10;
  background-color: ${verde};
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export { ButtonStyle, TextButton };
