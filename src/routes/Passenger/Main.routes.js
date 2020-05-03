import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';

import { verde } from '~/assets/css/Colors';
import Main from '~/pages/Passenger/Main';
import Absence from '~/pages/Passenger/Absence/Absence';
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
          <Icon name={'sign-out'} size={29} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: verde,
      }}
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#fff',
      }}
      drawerContent={CustomDrawerContent}
      drawerType="back">
      <Drawer.Screen
        name="Home"
        component={Main}
        options={{
          drawerIcon: ({ focused, color }) => (
            <Icon name={'home'} size={27} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Absence"
        component={Absence}
        options={{
          drawerLabel: 'Ausência',
          drawerIcon: ({ focused, color }) => (
            <Icon name={'home'} size={27} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Itinerary"
        component={ItineraryRoutes}
        options={{
          drawerLabel: 'Itinerário',
          drawerIcon: ({ focused, color }) => (
            <Icon name={'road'} size={26} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
