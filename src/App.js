import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer.jsx';
import './App.css';
import './bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LoginContainer />
      </div>
    );
  }
}

export default App;
