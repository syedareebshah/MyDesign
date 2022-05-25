import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomTab from './src/components/BottomTab';
import SearchBar from './src/components/SearchBar';
import Navigation from './src/navigation';
import BookDetails from './src/screens/BookDetails';
import Explore from './src/screens/Explore';
import MyFav from './src/screens/Fav';



const App = () => {


  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({

});

export default App;
