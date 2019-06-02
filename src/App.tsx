import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/index'
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import List from './List/List';
import SideBar from './SideBar';

export default () => (
  <Provider store={store}>
    <div className="App">
      <SideBar/>
      <div>
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    </div>
  </Provider>
);
