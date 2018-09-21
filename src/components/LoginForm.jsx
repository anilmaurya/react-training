import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Label from './Label.jsx';

const LoginForm = props => {
  return (
    // JSX
    <form onSubmit={props.handleOnSubmit}>
      <div>
        <Label text='Email' />
        <Input required={true} handleOnChange={props.handleOnChange} name='email'/>
      </div>
      <div>
        <Label text='Username' />
        <Input handleOnChange={props.handleOnChange} name='username'/>
      </div>
      <div>
        <Label text='Password' />
        <Input inputType='password' required={true} handleOnChange={props.handleOnChange} name='password'/>
      </div>
      <div>
        <Button text='Cancel'/>
        <Button text='Submit'/>
      </div>
    </form>
  );
};

export default LoginForm;
