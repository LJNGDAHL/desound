import React from 'react';
import './Content.css';
import ControlSection from '../ControlSection/ControlSection';
import Card from '../Card/Card';

const Content = ({ fetchData, limit, method, response, updateState }) => {

  // Properties needed in ControlSection component
  const controlProps = {
    fetchData,
    limit,
    method,
    updateState
  };

  const cards = response.similarartists.artist.map((artist, index) => {
    return (<Card key={ index } artist={ artist } />);
  });

  return (
    <div className="fade-in">
      <div className="cards">{ cards }</div>
      <ControlSection { ...controlProps } />
    </div>
  );
};

export default Content;
