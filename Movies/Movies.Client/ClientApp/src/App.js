import React, { Component } from 'react';

import Navigation from './features/navigation';
import Routes from './routes';
import { authenticate } from './utilities/authentication-configuration';

import './App.css';

class App extends Component {
  render() {
    authenticate();
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
