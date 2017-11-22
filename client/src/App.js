import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Shortener from './components/Shortener';
import Hello from './components/Hello';
import About from './components/About';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Route path='/' exact component={Shortener} />
        <Route path='/docs' component={Hello} />
        <Route path='/about' component={About} />
      </div>
    );
  }
}

export default App;
