import React from 'react';
import './Search.css';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const Search = ({ handleChange, value, fetchResponse }) => {
  return (
    <div className="Search">
      <InputField name="artist" handleChange={ handleChange } value={ value } />
      <Button handleClick={ fetchResponse }>Explore band</Button>
    </div>
  );
};

export default Search;