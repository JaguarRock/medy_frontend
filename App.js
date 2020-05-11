import React, { Component } from 'react';
import store from "./store/store";
import Router from "./components/index";
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}