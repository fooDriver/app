import superagent from 'superagent';
import querystring from 'querystring';
import React from 'react';
import { LoginContext } from './context.js';

//const API = 'http://localhost:3000';
const API = 'https://foodriverdb.herokuapp.com';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Logout extends React.Component {
  logout = (e, logoutMethodFromProvider) => {
    logoutMethodFromProvider();
    return null;
  };

  render() {
    let authURL = null; //this.googleURL();

    return (
      <LoginContext.Consumer>
        {context => {
          console.log('CTX', context);
          return (
            <>          
              { context.loggedIn ? this.logout(null, context.logout) : null }
            </>
          )
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Logout;