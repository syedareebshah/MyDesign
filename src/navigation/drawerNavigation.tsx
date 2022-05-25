import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Explore from '../screens/Explore';
import { MainBottomTabParamList } from './MainBottomTabParams';



const Drawer = createDrawerNavigator<MainBottomTabParamList>();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Explore' >
                <Drawer.Screen name="Explore" component={Explore} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}