import React, { Component } from 'react';
import './Range.css';

class Range extends Component {
  timeout = null;

  render()  {
    const { name, value, handleInput, handleChange } = this.props;
    const onchange = (e) => {
      handleInput(e);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        handleChange(name, value);
      }, 450 );
    };

    return (
      <input className="range" type="range" name={ name } onChange={ onchange } value={ value } min="1" max="28" />
    );
  }
}

export default Range;
