import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Add from './Add'
import AddNewMedicine from './AddNewMedicine'
import HistoryPage from '../History/HistoryPage'
import History from '../History/HistoryNavigator'
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const AddNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Add" headerMode = 'none'>
            <Stack.Screen name = "Add" component = {Add}/>
            <Stack.Screen name = "AddNewMedicine" component = {AddNewMedicine}/>
            <Bottom.Screen name = "History" component = {History}/>
        </Stack.Navigator>
    )
}

export default AddNavigator