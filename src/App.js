import React, { Component } from 'react';
import logo from './assets/foodriver.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="foodriver logo" />
      </React.Fragment>
    );
  }
}

export default App;
