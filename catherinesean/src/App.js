import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar.js';
import rosecliff from '../public/rosecliff_mansion.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
