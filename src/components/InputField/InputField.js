import React from 'react';

const InputField = ({ handleChange, value, name }) => {
  return (
    <input type="text" name={ name } onChange={ handleChange } value={ value } />
  );
};

export default InputField;
