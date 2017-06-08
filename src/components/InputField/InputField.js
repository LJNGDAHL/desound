import React from 'react';
import './InputField.css';

const InputField = ({ handleChange, value, name, type }) => {
  return (
    <input className="input" type={ type } name={ name } onChange={ handleChange } placeholder="Search for a band" value={ value } />
  );
};

export default InputField;
