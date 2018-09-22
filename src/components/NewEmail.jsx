import React from 'react';

const NewEmail = props => {
  return (
    // JSX
    <div>
      <textarea
        name={props.name}
        type={props.inputType}
        required={props.required}
        onChange={ props.handleOnChange}
        col={props.col}
        row={props.row}
      />
    </div>
  );
};

export default NewEmail;
