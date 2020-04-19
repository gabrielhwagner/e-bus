import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { AsyncStorage } from 'react-native';

import Main from '~/pages/Main';
import ItineraryRoutes from './Itinerary.routes';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate('Login');
        }}
        icon={({ focused, color }) => (
          <Icon name={'ios-exit'} size={24} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function() {
  console.log('MAIS');
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      drawerType="back">
      <Drawer.Screen
        name="Home"
        component={Main}
        options={{
          drawerIcon: ({ focused, color }) => (
            <Icon name={'ios-home'} size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Itinerary"
        component={ItineraryRoutes}
        options={{
          drawerLabel: 'Itinerário',
          drawerIcon: ({ focused, color }) => (
            <Icon name={'ios-map'} size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
