import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginContainer extends Component {
  state = {
    email: null,
    password: null,
    isSubmitted: false,
    isValid: false,
    error: {
      email: null,
      password: null
    }
  }
  render(){
    return (
      <LoginForm/>
    )
  }
}

export default LoginContainer;
