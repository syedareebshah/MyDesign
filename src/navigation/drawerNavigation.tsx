import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Explore from '../screens/Explore';
import MyFav from '../screens/Fav';
import { DrawerNavigationParams } from './DrawerNavigationParams'
import IconExplore from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Navigation from './tabBarNavigation';



const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Explore" component={Navigation} options={{
        drawerIcon: (({ color, size }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconExplore name="search" color={color} size={size} />
            </View>
          )
        })
      }} />

      <Drawer.Screen name="MyFav" component={MyFav} options={{
        drawerIcon: (({ color, size }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconMaterialIcons name="favorite-border" color={color} size={size} />
            </View>
          )
        })
      }} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigation