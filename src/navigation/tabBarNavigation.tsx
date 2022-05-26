import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from "../screens/Explore";
import { MainBottomTabParamList } from './MainBottomTabParams';
import { NavigationContainer } from "@react-navigation/native";
import MyFav from "../screens/Fav";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import IconExplore from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Menu from "../screens/Menu";
import DrawerNavigation from "./drawerNavigation";

const Tab = createBottomTabNavigator<MainBottomTabParamList>();



const Navigation = () => {

    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    position: 'absolute',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: 'rgba(244, 244, 244, 0.95)',
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            }}
        >


            <Tab.Screen name="ExploreScreen" component={Explore}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconExplore name="search" color={color} size={size} />
                                <Text>Explore</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen name="MyFavScreen" component={MyFav}
                options={{
                    tabBarLabel: 'SOME',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconMaterialIcons name="favorite-border" color={color} size={size} />
                                <Text>Favorite</Text>
                            </View>
                        )
                    }
                }}

            />
            <Tab.Screen name="MenuScreen" component={Menu}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconEntypo name="menu" color={color} size={size} />
                                <Text>Menu</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigation;

