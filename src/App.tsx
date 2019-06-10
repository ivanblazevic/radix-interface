import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/index'
import './App.css';
import './Utils.css';
import './BurgerMenu.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListContainer from './components/List/ListContainer';
import SideBar from './SideBar';
import Settings from './components/Settings/Settings';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
            <ListContainer></ListContainer>
            <Footer></Footer>
          </div>
        </div>
        <Settings show={this.state.show} handleClose={this.hideModal} />
      </Provider>
    );
  }
}

export default App;