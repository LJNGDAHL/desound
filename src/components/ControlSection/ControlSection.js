import React from 'react';
import './ControlSection.css';
import Range from '../Range/Range';
import Select from '../Select/Select';

const ControlSection = ({ limit, updateState, fetchData, method }) => {
  return (
    <div className="search-options"> { /* This should be a component */ }
      <div className="search-options__item">
        <h2>Showing <span className="number">{ limit }</span> results</h2>
        <Range name="limit" value={ limit } handleInput={ updateState } handleChange={ fetchData } />
      </div>
      <div className="search-options__item">
        <h2>Search Result Showing</h2>
        <Select selected={ method } handleInput={ updateState } handleChange={ fetchData } />
      </div>
    </div>
  );
};

export default ControlSection;
