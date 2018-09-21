import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import DashboardContainer from './DashboardContainer'

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
  handleOnChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    }, () => {
      console.log(this.state)
    })
  }
  handleOnSubmit = (evt) => {
    evt.preventDefault();
    this.setState({isSubmitted: true}, () => {console.log('form submitted')})
  }
  render(){
      if (this.state.isSubmitted){
        return (<DashboardContainer/>)
      } else {
        return(
          <LoginForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>
        )
      }
  }
}

export default LoginContainer;
