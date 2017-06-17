import React from 'react';
import './Link.css';

const Link = ({ url, children, cssClass='link' }) => {
  return (
    <a href={ url } className={ cssClass } >{ children }</a>
  );
};

export default Link;
