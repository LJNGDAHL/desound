import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from './../../actions/actionCreators';

class Navigation extends Component {
  render() {
    const iconStyles = this.props.menu.open ? 'open nav-icon' : 'nav-icon';
    const navStyles = this.props.menu.open ? 'navigation navigation--visible' : 'navigation';
    const handleMenuState = () => this.props.dispatch(toggleMenu());

    return(
      <div>
        <div className={ iconStyles } onClick={ handleMenuState }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={ navStyles }>
          <h2 className="navigation__headline">Desound.</h2>
          <NavLink className="navigation__link" exact to="/" onClick={ handleMenuState }>Discover</NavLink>
          <NavLink className="navigation__link" to="/about" onClick={ handleMenuState }>About Desound</NavLink>
          <NavLink className="navigation__link" to="/lastfm" onClick={ handleMenuState }>Why Last.fm?</NavLink>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

export default connect(mapStateToProps)(Navigation);
