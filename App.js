import React, { Component } from 'react';
import store from "./store/store";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from "./components/MainScreen"
import SignUp from './components/SignUp/SignUpPage'
import SignInPage from './components/SignIn/SignInPage'
import {View, Text} from 'react-native'
import { render } from 'react-dom';
import BottomBar from './components/MainScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Navigator from './components/Navigator';


class App extends React.Component{
  render(){
    const isSignIn = false;
    return (
      <Provider store={store}>
        <NavigationContainer> 
            {/*{(isSignIn ? <SignUp/> : <SignInPage/>)}*/}
            <Navigator/>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
