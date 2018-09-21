import React from 'react';

const Input = props => {
  return (
    // JSX
    <div>
      <input type={props.inputType} required={props.required} />
    </div>
  );
};

export default Input;
