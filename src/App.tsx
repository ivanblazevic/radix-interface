import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/index'
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import List from './List/List';
import SideBar from './SideBar';
import Settings from './Settings';

/*
export default () => (

);
*/

class App extends Component {

  state = { show: false, openSidebar: false };

  show = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  handleStateChange = (state: any) => {
    this.setState({ openSidebar: state.isOpen });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SideBar isOpen={this.state.openSidebar} handleStateChange={this.handleStateChange} showSettings={this.show} />
          <div>
            <Header store={store}></Header>
            <List></List>
            <Footer></Footer>
          </div>
        </div>
        <Settings show={this.state.show} handleClose={this.hideModal} />
      </Provider>
    );
  }
}

export default App;