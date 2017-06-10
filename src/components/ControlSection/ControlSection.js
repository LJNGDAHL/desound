import React from 'react';
import './ControlSection.css';
import Range from '../Range/Range';
import Select from '../Select/Select';

const ControlSection = ({ fetchData, limit, method, updateState }) => {
  return (
    <div className="control-section">
      <div className="control-section__item">
        <h2>Showing <span className="number">{ limit }</span> results</h2>
        <Range name="limit" value={ limit } handleInput={ updateState } handleChange={ fetchData } />
      </div>
      <div className="control-section__item">
        <h2>Search Result Showing</h2>
        <Select selected={ method } handleInput={ updateState } handleChange={ fetchData } />
      </div>
    </div>
  );
};

export default ControlSection;
