import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddMedicineScreen from "./components/AddMedicine/AddMedicineScreen";
import MedicineScreen from "./components/AddMedicine/MedicineScreen";
import MedicineDetailScreen from "./components/AddMedicine/MedicineDetailScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddMedicineScreen" component={AddMedicineScreen} options={{ title: 'Add Medicine' }}/>
      <Stack.Screen name="MedicineScreen" component={MedicineScreen} options={{ title: 'Medicine Lists'}}/>
      <Stack.Screen name="MedicineDetailScreen" component={MedicineDetailScreen} options={{ title: 'Medicine Detail'}}/>
    </Stack.Navigator>
  )
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
  }
}
//ddd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
