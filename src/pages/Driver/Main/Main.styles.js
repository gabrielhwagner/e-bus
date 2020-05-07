import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { verdeDois, verde } from '~/assets/css/Colors';

const Container = styled.View`
  flex: 1;
  padding: 0;
  background-color: #edeff1;
  position: relative;
`;

const Background = styled.ImageBackground`
  flex: 1;
`;

const Icon = styled.ImageBackground`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  opacity: 0.8;
`;

const Item = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 80};
  height: ${Dimensions.get('window').height - 300};
  background-color: #fff;
  border-bottom-width: 8px;
  border-bottom-color: #cecece;
  border-right-width: 8px;
  border-right-color: #cecece;
  border-radius: 8px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 30px;
  color: ${verdeDois};
  margin: 20px;
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export { Container, Item, Background, Icon, Title };
