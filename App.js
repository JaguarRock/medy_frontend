import React, { Component } from 'react';
import store from "./store/store";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from "./components/MainScreen"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    )
  }
}