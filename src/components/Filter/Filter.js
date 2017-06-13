import React from 'react';
import './Filter.css';
import Range from '../Range/Range';
import Select from '../Select/Select';

const Filter = ({ fetchData, limit, method, updateState }) => {

  /**
   * Updates state and performs a new search based on current target
   * when user clicks on artist name.
   */
  const handleSelect = method => {
    fetchData({ method });
  };

  return (
    <div className="filter">
      <div className="filter__item">
        <h2>Showing <span className="number">{ limit }</span> results</h2>
        <Range name="limit" value={ limit } handleInput={ updateState } handleChange={ fetchData } />
      </div>
      <div className="filter__item">
        <h2>Search Result Showing</h2>
        <Select selected={ method } onChange={ handleSelect } />
      </div>
    </div>
  );
};

export default Filter;
