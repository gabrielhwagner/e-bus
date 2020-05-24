import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { dark } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  width: ${Dimensions.get('window').width - 60};
  background-color: #fff;
  border-radius: 8;
  padding: 10px;
`;

const Image = styled.Image`
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
`;

const Background = styled.ImageBackground`
  flex: 1;
`;

export { Container, Content, Background, Image };
