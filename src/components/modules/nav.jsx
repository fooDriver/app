import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Auth from '../auth/auth.js';
import { LoginContext } from '../auth/context.js';

const If = props => {
  console.log('TOKEN',props);
  return !!props.condition ? props.children : null;
};

class Nav extends React.Component {
  render () {
    return (
      <LoginContext.Consumer>
        {context => {
          console.log('Context from nav2', context);
          return (
            <ul>
              <li>
                <Link to="/">Home</Link>
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
              <li>
                <Link to="/about">About</Link>
              </li>
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
          )
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Nav;