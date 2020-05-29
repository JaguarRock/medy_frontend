import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './SignIn'
import MainScreen from '../MainScreen'
import TodayMedicine from '../TodayMedicine/TodayMedicine'
import TodayMedicineList from '../TodayMedicine/TodayMedicineList'
const SignInStack = createStackNavigator();

export default function SignInNavigator () {
    return(
    <SignInStack.Navigator initialRouteName = "SignIn" headerMode = 'none'>
        <SignInStack.Screen name = "SignIn" component = {SignIn}/>
        <SignInStack.Screen name = "MainScreen" component = {MainScreen}/>
    </SignInStack.Navigator>
    )
}