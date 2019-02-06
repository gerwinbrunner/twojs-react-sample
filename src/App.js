import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwoSample from './TwoSample.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TwoSample />
        </header>
      </div>
    );
  }
}

export default App;
