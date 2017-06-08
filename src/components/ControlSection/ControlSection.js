import React from 'react';
import './ControlSection.css';
import Range from '../Range/Range';
import Select from '../Select/Select';

const ControlSection = ({ limit, handleInput, handleChange }) => {
  return (
    <div className="search-options"> { /* This should be a component */ }
      <div className="search-options__item">
        <h2>Showing <span className="number">{ limit }</span> results</h2>
        <Range name="limit" value={ limit } handleInput={ handleInput } handleChange={ handleChange } />
      </div>
      <div className="search-options__item">
        <h2>Search Result Showing</h2>
        <Select />
      </div>
    </div>
  );
};

export default ControlSection;
