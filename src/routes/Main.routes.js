import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from '~/pages/Main';
import Mapa from '~/pages/Mapa';

const Drawer = createDrawerNavigator();

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  // const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => {}}
        icon={({ focused, color }) => <Text>****</Text>}
      />
    </DrawerContentScrollView>
  );
}

export default function() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      drawerType="back">
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, color }) => <Text>****</Text>,
        }}
        name="Home"
        component={Main}
      />
      <Drawer.Screen name="Mapa" component={Mapa} />
    </Drawer.Navigator>
  );
}
