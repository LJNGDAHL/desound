import React from 'react';
import Link from '../components/Link/Link';

const About = () => {
  return(
    <div className="app__content app__content--text">
      <h2 className="app__headline">What is Desound?</h2>
      <p>Desound is a place where you can find out more about the bands that you love. It is powered by Last.fm, a playground for music lovers from all over the world. Desound is build with React as a learning experience in a javascript course held at Medieinstitutet in Stockholm. If you want to have a look behind the scenes, the project can be found on <Link url="https://github.com/LJNGDAHL/desound" cssClass="link link--pink">Github</Link>.</p>
    </div>
  );
};

export default About;
