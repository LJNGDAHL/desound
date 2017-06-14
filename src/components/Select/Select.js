import React from 'react';
import './Select.css';

const Select = ({ selected, onChange }) => {

  const onchange = event => {
    switch (event.target.selectedIndex) {
    case 0:
      return onChange('getsimilar');
    case 1:
      return onChange('gettoptracks');
    case 2:
      return onChange('gettopalbums');
    default:
      console.log('That is not an available option.');
    }
  };

  // The options available for filtering. Matches 'selected' property
  const options = ['getsimilar', 'gettoptracks', 'gettopalbums'];

  return (
    <div className="select">
      <select name="method" onChange={ onchange }>
        <option value={ options[0] } selected={ selected === options[0] ? ' selected' : '' }>Similar artists</option>
        <option value={ options[1] } selected={ selected === options[1] ? ' selected' : '' }>Top tracks</option>
        <option value={ options[2] } selected={ selected === options[2] ? ' selected' : '' }>Top album</option>
      </select>
    </div>
  );
};

export default Select;
