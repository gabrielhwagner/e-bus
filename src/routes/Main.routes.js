import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '~/pages/Main';
import Mapa from '~/pages/Mapa';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => props.navigation.navigate('Login')}
        icon={({ focused, color }) => (
          <Icon name={'ios-exit'} size={24} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      drawerType="back">
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, color }) => (
            <Icon name={'ios-home'} size={24} color={color} />
          ),
        }}
        name="Home"
        component={Main}
      />
      <Drawer.Screen
        name="Mapa"
        component={Mapa}
        options={{
          drawerIcon: ({ focused, color }) => (
            <Icon name={'ios-map'} size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
