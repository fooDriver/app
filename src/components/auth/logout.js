import React from 'react';
import { LoginContext } from './context.js';
import { Redirect } from 'react-router-dom';

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
              <Redirect to='/' />
            </>
          )
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Logout;