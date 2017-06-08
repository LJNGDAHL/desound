import React from 'react';
import './Link.css';

const Link = ({ url, children }) => {
  return (
    <a href={ url } className="link" >{ children }</a>
  );
};

export default Link;
