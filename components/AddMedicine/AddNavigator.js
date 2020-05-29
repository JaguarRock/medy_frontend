import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Add from './Add'
import AddNewMedicine from './AddNewMedicine'
const Stack = createStackNavigator();

const AddNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Add" headerMode = 'none'>
            <Stack.Screen name = "Add" component = {Add}/>
            <Stack.Screen name = "AddNewMedicine" component = {AddNewMedicine}/>
        </Stack.Navigator>
    )
}

export default AddNavigator