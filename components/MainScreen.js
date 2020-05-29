import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/TodayMedicine/Home";
//import History from "../components/History/History";
import Add from "../components/AddMedicine/Add";
import Store from "../components/Store/Store";
import MyPage from "../components/MyPage/MyPage";
import History from "../components/History/History";
import AddNavigator from '../components/AddMedicine/AddNavigator'
import { Feather } from 'react-native-vector-icons'
import { FontAwesome5 } from 'react-native-vector-icons'
import { MaterialIcons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'rgba(255, 90, 95, 0.9)',
                inactiveTintColor: 'grey',
                showLabel: false
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="history" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Add Medicine"
                component={AddNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="local-grocery-store" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="My Page"
                component={MyPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
