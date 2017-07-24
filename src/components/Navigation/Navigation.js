import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from './../../actions/actionCreators';

class Navigation extends Component {
  render() {
    const iconStyles = this.props.menu.open ? 'open nav-icon' : 'nav-icon';
    const navStyles = this.props.menu.open ? 'navigation navigation--visible' : 'navigation';

    return(
      <div>
        <div className={ iconStyles } onClick={ () => this.props.dispatch(toggleMenu()) }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={ navStyles }>
          <h2 className="navigation__headline">Desound.</h2>
          <NavLink className="navigation__link" exact to="/" onClick={ () => this.props.dispatch(toggleMenu()) }>Discover</NavLink>
          <NavLink className="navigation__link" to="/about" onClick={ () => this.props.dispatch(toggleMenu()) }>About Desound</NavLink>
          <NavLink className="navigation__link" to="/lastfm" onClick={ () => this.props.dispatch(toggleMenu()) }>Why Last.fm?</NavLink>
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
