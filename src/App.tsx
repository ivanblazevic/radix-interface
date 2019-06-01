import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/index'
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import List from './List/List';

export default () => (
  <Provider store={store}>
    <div className="App">
      <Header></Header>
      <List></List>
    </div>
  </Provider>
);
