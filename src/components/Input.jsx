import React from 'react';

const Input = props => {
  return (
    // JSX
    <div>
      <input
        name={props.name}
        type={props.inputType}
        required={props.required}
        onChange={ props.handleOnChange}
      />
    </div>
  );
};

export default Input;
