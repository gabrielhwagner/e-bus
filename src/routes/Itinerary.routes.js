import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Itinerary from '~/pages/Itinerary/Itinerary';
import Preview from '~/pages/Itinerary/Preview/Preview';
import Go from '~/pages/Itinerary/Go/Go';
import PassengerList from '~/pages/Itinerary/PassengerList/PassengerList';

const Stack = createStackNavigator();

export default function ItineraryRoute() {
  return (
    <Stack.Navigator initialRouteName="Itinerary">
      <Stack.Screen
        name="Itinerary"
        component={Itinerary}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Go" component={Go} options={{ headerShown: false }} />
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
