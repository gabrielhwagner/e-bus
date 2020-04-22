import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPassenger from './Passenger/Main.routes';
import MainDriver from './Driver/Main.routes';
import Login from '~/pages/Login/Login';

const Stack = createStackNavigator();

@inject('store')
@observer
class Routes extends Component {
  constructor(props) {
    super();
    this.authStore = props.store.AuthStore;
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        {this.authStore.isPassenger ? (
          <Stack.Screen
            name="Main"
            component={MainPassenger}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainDriver}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default Routes;
