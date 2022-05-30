import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Sinup from '../screens/Sinup';
import Forgot from '../screens/Forgot';
import DrawerNavigation from './DrawerNavigation';
import BookDetails from '../screens/BookDetails';
import BookCard from '../components/BookCard';
import SplashScreen from 'react-native-splash-screen'


const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    useEffect(() => {
        SplashScreen.hide();
    },[])

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sinup" component={Sinup} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
            <Stack.Screen name="BookCard" component={BookCard} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
    )

}




export default StackNavigation