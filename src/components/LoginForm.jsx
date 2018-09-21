import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Label from './Label.jsx';

const LoginForm = props => {
  return (
    // JSX
    <form>
      <div>
        <Label text='Email' />
        <Input required='true' handleOnChange={this.props.handleOnChange}/>
      </div>
      <div>
        <Label text='Username' />
        <Input />
      </div>
      <div>
        <Label text='Password' />
        <Input inputType='password' required='true' />
      </div>
      <div>
        <Button text='Cancel'/>
        <Button text='Submit'/>
      </div>
    </form>
  );
};

export default LoginForm;
