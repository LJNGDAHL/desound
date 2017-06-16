import React from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import { extractEvent } from '../../utils';

const SearchForm = ({ handleChangeRefined, value, onSubmit }) => {

  const onsubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="Search">
      <form onSubmit={ onsubmit }>
        <InputField type="text" name="artist" handleChange={ extractEvent(handleChangeRefined) } value={ value } />
        <Button type="submit">Explore band</Button>
      </form>
    </div>
  );
};

export default SearchForm;
