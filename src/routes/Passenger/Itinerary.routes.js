import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Itinerary from '~/pages/Passenger/Itinerary/Itinerary';
import Location from '~/pages/Passenger/Itinerary/Location/Location';

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
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default ItineraryRoute;
