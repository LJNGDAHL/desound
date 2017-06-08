import React from 'react';
import './InputField.css';

const InputField = ({ handleChange, value, name, type }) => {
  return (
    <input className="InputField" type={ type } name={ name } onChange={ handleChange } placeholder={ value } value={ value } min="1" max="50" />
  );
};

export default InputField;
