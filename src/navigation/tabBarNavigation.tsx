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

const Tab = createBottomTabNavigator<MainBottomTabParamList>();



const Navigation = () => {
    
    return (
            <Tab.Navigator
                screenOptions={{
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
              
                <Tab.Screen name="Explore" component={Explore}
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

                <Tab.Screen name="MyFav" component={MyFav}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                    <IconMaterialIcons name="favorite-border" color={color} size={size} />
                                    <Text>Explore</Text>
                                </View>
                            )
                        }
                    }}

                />
                <Tab.Screen name="Menu" component={Menu}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                    <IconEntypo name="menu" color={color} size={size} />

                                    <Text>Explore</Text>
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
    )
}

export default Navigation;

