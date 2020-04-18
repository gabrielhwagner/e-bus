import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer, inject } from 'mobx-react';

import Itinerary from '~/pages/Itinerary/Itinerary';
import Preview from '~/pages/Itinerary/Preview/Preview';
import Go from '~/pages/Itinerary/Go/Go';
import PassengerList from '~/pages/Itinerary/PassengerList/PassengerList';
import Location from '~/pages/Itinerary/Location/Location';

const Stack = createStackNavigator();

@inject('store')
@observer
class ItineraryRoute extends Component {
  constructor(props) {
    super();
    this.authStore = props.store.AuthStore;
  }

  routesPassenger() {
    return (
      <>
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
      </>
    );
  }

  routesDriver() {
    return (
      <>
        <Stack.Screen
          name="Go"
          component={Go}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PassengerList"
          component={PassengerList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preview"
          component={Preview}
          options={{ headerShown: false }}
        />
      </>
    );
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="Itinerary">
        <Stack.Screen
          name="Itinerary"
          component={Itinerary}
          options={{ headerShown: false }}
        />
        {this.authStore.user.tipo === 'PASSAGEIRO'
          ? this.routesPassenger()
          : this.routesDriver()}
      </Stack.Navigator>
    );
  }
}

export default ItineraryRoute;
