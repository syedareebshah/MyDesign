import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from "../screens/Explore";
import { MainBottomTabParamList } from './MainBottomTabParams';
import { NavigationContainer } from "@react-navigation/native";
import MyFav from "../screens/Fav";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import IconExplore from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
             screenOptions={{
                headerShown: false,                
                tabBarStyle:{
                    height:60,
                    position:'absolute',
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    backgroundColor:'rgba(244, 244, 244, 0.95)',   
                }
            }}>
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="MyFav" component={MyFav} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
        </NavigationContainer >
    )
}

export default Navigation;

