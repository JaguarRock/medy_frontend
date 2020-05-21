import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/TodayMedicine/Home";
import History from "../components/History/History";
import AddMedicine from "../components/AddMedicine/AddNewMedicine";
import Store from "../components/Store/Store";
import MyPage from "../components/MyPage/MyPage";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'rgba(255, 90, 95, 0.9)',
                inactiveTintColor: 'grey',
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                 />
            <Tab.Screen 
                name="History"
                component={History}
                />
            <Tab.Screen 
                name="Add Medicine"
                component={AddMedicine}
                />
            <Tab.Screen 
                name="Store" 
                component={Store} 
                />
            <Tab.Screen 
                name="My Page" 
                component={MyPage} 
                />
        </Tab.Navigator>
    )
}