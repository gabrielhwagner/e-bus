import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Itinerary from '~/pages/Driver/Itinerary/Itinerary';
import Preview from '~/pages/Driver/Itinerary/Preview/Preview';
import PassengerList from '~/pages/Driver/Itinerary/PassengerList/PassengerList';
import Go from '~/pages/Driver/Itinerary/Go/Go';

const Stack = createStackNavigator();

class ItineraryRoute extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Itinerary">
        <Stack.Screen
          name="Itinerary"
          component={Itinerary}
          options={{ headerShown: false }}
        />
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
          name="Preview"
          component={Preview}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default ItineraryRoute;
