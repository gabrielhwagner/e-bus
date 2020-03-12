import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main.routes';
import Login from '~/pages/Login/Login';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
