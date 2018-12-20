import React from "react";
import styles from './nav.module.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Auth from '../auth/auth.js';
import { LoginContext } from '../auth/context.js';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Nav extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <div className={styles.container}>
              
              <ul className={styles.nav}>
              <input type="checkbox" id="hamburger" name="hamburger" />
              <label for="hamburger" class="fas fa-bars"></label>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <Auth capability="driver">
                  <li>
                    <Link to='/driver'>Driver</Link>
                  </li>
                </Auth>
                <Auth capability="client">
                  <li>
                    <Link to='/client'>Client</Link>
                  </li>
                </Auth>
                <Auth capability="donator">
                  <li>
                    <Link to='/donator'>Donator</Link>
                  </li>
                </Auth>
                <If condition={!context.loggedIn}>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </If>
                <Auth>
                  <li>
                    <Link to='/logout'>Logout</Link>
                  </li>
                </Auth>
                <If condition={!context.loggedIn}>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </If>
              </ul>
            </div>
          )
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Nav;