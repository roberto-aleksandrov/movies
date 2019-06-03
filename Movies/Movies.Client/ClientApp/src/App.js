import React, { Component } from 'react';

import Navigation from './features/navigation';
import Routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <div className='content'>
          <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
