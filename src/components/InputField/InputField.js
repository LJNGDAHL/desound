import React from 'react';
import './InputField.css';

const InputField = ({ handleChange, value, name }) => {
  return (
    <input className="InputField" type="text" name={ name } onChange={ handleChange } value={ value } />
  );
};

export default InputField;
