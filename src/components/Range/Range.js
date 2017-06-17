import React from 'react';
import './Range.css';

/**
 * Returns a function which can be used to create a range with a new timeout
 * each time it is used.
 */
const createRange = () => {
  let timeout = null;

  return function Range({ name, value, handleInput, handleChange }) {
    const onchange = (e) => {
      handleInput(e);
      clearTimeout(timeout);
      // Only handle change after 450ms
      timeout = setTimeout(() => {
        handleChange(name, value);
      }, 450);
    };

    return (
      <input className="range" type="range" name={ name } onChange={ onchange } value={ value } min="1" max="28" />
    );
  };
};

export default createRange;
