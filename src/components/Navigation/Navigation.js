import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  /**
   * Inverts the state on open when menu is toggled.
   */
  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const iconStyles = this.state.open ? 'open nav-icon' : 'nav-icon';
    const navStyles = this.state.open ? 'navigation navigation--visible' : 'navigation';

    return(
      <div>
        <div className={ iconStyles } onClick={ this.toggleMenu }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={ navStyles }>
          <h2 className="navigation__headline">Desound.</h2>
          <NavLink className="navigation__link" exact to="/" onClick={ this.toggleMenu }>Discover</NavLink>
          <NavLink className="navigation__link" to="/about" onClick={ this.toggleMenu }>About Desound</NavLink>
          <NavLink className="navigation__link" to="/lastfm" onClick={ this.toggleMenu }>Why Last.fm?</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
