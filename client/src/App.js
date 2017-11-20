import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Shortener from './components/Shortener';
import Hello from './components/Hello';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Route path='/' exact component={Shortener} />
        <Route path='/docs' exact component={Hello} />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
