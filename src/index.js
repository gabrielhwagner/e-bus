import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import '~/config/ReactotronConfig';
import Mapa from '~/pages/Mapa';
import Main from '~/pages/Main';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Mapa" component={Mapa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
