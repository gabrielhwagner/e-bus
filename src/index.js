import React from 'react';
import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/routes';

function App() {
  Reactotron.log('Rodou');
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
