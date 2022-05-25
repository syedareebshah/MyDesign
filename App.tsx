import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomTab from './src/components/BottomTab';
import SearchBar from './src/components/SearchBar';
import DrawerNavigation from './src/navigation/drawerNavigation';
import Navigation from './src/navigation/tabBarNavigation';
import BookDetails from './src/screens/BookDetails';
import Explore from './src/screens/Explore';
import MyFav from './src/screens/Fav';
import Forgot from './src/screens/Forgot';
import Login from './src/screens/Login';
import Sinup from './src/screens/Sinup';



const App = () => {


  return (
    <DrawerNavigation />
  );
};

const styles = StyleSheet.create({

});

export default App;
