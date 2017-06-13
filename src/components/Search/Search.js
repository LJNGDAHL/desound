import React from 'react';
import './Search.css';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const Search = ({ handleChange, value, handleClick }) => {
  return (
    <div className="Search">
      <InputField type="text" name="artist" handleChange={ handleChange } value={ value } />
      <Button handleClick={ handleClick }>Explore band</Button>
    </div>
  );
};

export default Search;
