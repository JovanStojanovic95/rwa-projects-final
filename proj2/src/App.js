import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyHeader from "./components/MyHeader";
import SearchBox from "./components/SearchBox";

import { Provider } from 'react-redux';
import store from './store';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Redux</h1>
        </header>
        <MyHeader/>
        <SearchBox/>
       
      </div>
      </Provider>
    );
  }
}

export default App;
