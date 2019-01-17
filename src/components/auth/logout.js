import React from 'react';
import { LoginContext } from './context.js';
import { Redirect } from 'react-router-dom';



class Logout extends React.Component {
  logout = (e, logoutMethodFromProvider) => {
    logoutMethodFromProvider();
    return null;
  };

  render() {
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