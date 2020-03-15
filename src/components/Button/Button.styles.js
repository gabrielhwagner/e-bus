import styled from 'styled-components/native';

import { verde } from '~/assets/css/Colors';

const ButtonStyle = styled.TouchableOpacity`
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
