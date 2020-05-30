import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import History from './History'
import HistoryItem from './HistoryItem'
import HistoryList from './HistoryList'
import HistoryPage from './HistoryPage'
import MedicineList from './MedicineList'
const Stack = createStackNavigator();

const HistoryNavigator = () => {
    return(
        <Stack.Navigator headerMode = "none">
            <Stack.Screen name = "History" component = {History}/>
            <Stack.Screen name = "HistoryItem" component = {HistoryItem}/>
            <Stack.Screen name = "HistoryList" component = {HistoryList}/>
            <Stack.Screen name = "HistoryPage" component = {HistoryPage}/>
            <Stack.Screen name = "MedicineList" component = {MedicineList}/>
        </Stack.Navigator>
    )
}

export default HistoryNavigator