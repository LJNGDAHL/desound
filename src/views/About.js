import React from 'react';

const About = () => {
  return(
    <div className="app__content app__content--text">
      <h2 className="app__headline">What is Desound?</h2>
      <p>Desound is a place where you can find out more about the bands that you love. It is powered by Last.fm, a playground for music lovers from all over the world. Desound is build with React as a learning experience in a javascript course held at Medieinstitutet in Stockholm. If you want to have a look behind the scenes, the project can be found on <a className="link link--pink" href="https://github.com/LJNGDAHL/desound">Github</a>.</p>
    </div>
  );
};

export default About;
