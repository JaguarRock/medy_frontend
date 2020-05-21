import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'

// import MedicineScreen from "./AddMedicine/MedicineScreen";
// import LoadingMedicineBag from "./AddMedicine/LoadingMedicineBag";
// import AddNewMedicine from "./AddMedicine/AddNewMedicine";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./TodayMedicine/Home";
import HistroyTab from "./History/History";
import AddMedicineTab from "./AddMedicine/AddNewMedicine";
import StoreTab from "./Store/Store";
import MyPageTab from "./MyPage/MyPage";
import { Component } from 'react';

// const AppStack = createStackNavigator({
//     MedicineScreen: {
//         screen: MedicineScreen,
//         navigationOptions: ({ navigation }) => ({
//             title: `Medicine Screen`,
//         }),
//     },
//     AddNewMedicine: {
//         screen: AddNewMedicine,
//         navigationOptions: ({ navigation }) => ({
//             title: `Add New Medicine`
//         }),
//     }
// });

// const RouteStack = createSwitchNavigator(
//     {
//         Loading: LoadingMedicineBag,
//         App: AppStack
//     },
//     {initialRouteName: 'Loading'}
// );

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen component={HomeTab}/>
            <Tab.Screen component={HistroyTab}/>
            <Tab.Screen component={AddMedicineTab}/>
            <Tab.Screen component={StoreTab}/>
            <Tab.Screen component={MyPageTab}/>
        </Tab.Navigator>
    )
}

export default MyTabs;