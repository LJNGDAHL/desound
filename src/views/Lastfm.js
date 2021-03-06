import React from 'react';
import Link from '../components/Link/Link';

const Lastfm = () => {
  return(
      <div className="app__content app__content--text">
        <h2 className="app__headline">Why Last.fm?</h2>
        <p>Before there was Spotify, it was Last.fm. At least for me. Last.fm was a playground for music lovers all over the world. We were eager to find new bands similar to those we already adored. Last.fm helped you find music shows, new favorite songs and other people like you.</p>
        <p>The Last.fm API does not require an OAuth access token. If you want to know more about how the API works, you can visit <Link url="http://www.last.fm/api" cssClass="link link--pink">Last.fm</Link>.</p>
      </div>
  );
};

export default Lastfm;
