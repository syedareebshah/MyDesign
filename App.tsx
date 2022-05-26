import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomTab from './src/components/BottomTab';
import Navigation from './src/navigation/tabBarNavigation';
import DrawerNavigation from './src/navigation/drawerNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
