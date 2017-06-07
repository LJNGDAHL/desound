import React from 'react';
import './Link.css';

const Link = ({ url, children }) => {
  return (
    <a href={ url } className="Link" >{ children }</a>
  );
};

export default Link;
