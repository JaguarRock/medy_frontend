import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddNewUser from './AddNewUser'
import MainScreen from '../MainScreen'
const SignUpStack = createStackNavigator();

export default function SignUpNavigate() {
    return(
        <SignUpStack.Navigator initialRouteName = "AddNewUser">
            <SignUpStack.Screen name = "AddNewUser" component = {AddNewUser}/>
            <SignUpStack.Screen name = "MainScreen" component = {MainScreen}/>
        </SignUpStack.Navigator>
    )
}