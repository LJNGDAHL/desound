import React from 'react';
import './Select.css';

const Select = () => {
  return (
    <div className="select">
      <select className="slct" name="slct">
        <option value="getsimilar" selected>Similar artists</option>
        <option value="gettoptracks">Top tracks</option>
        <option value="getinfo">Top album</option>
      </select>
    </div>
  );
};

export default Select;
