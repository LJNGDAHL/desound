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

  return (
    <div className="select">
      <select name="method" onChange={ onchange }>
        <option value="getsimilar" defaultValue={ selected === 'getsimilar' }>Similar artists</option>
        <option value="gettoptracks" defaultValue={ selected === 'gettoptracks' }>Top tracks</option>
        <option value="gettopalbums" defaultValue={ selected === 'gettopalbums' }>Top album</option>
      </select>
    </div>
  );
};

export default Select;
