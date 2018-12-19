import React, { Component } from 'react';
import Nav from './modules/nav.jsx';
import Footer from './modules/footer.jsx';
import RequestDonate from './pages/requestdonate.jsx';
import Driver from './pages/driver.jsx';
import Auth from './auth/auth.js';
import Login from './auth/login.js';
import LoginContext from './auth/context.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <LoginContext>
          <Login />
          <Auth capability='driver'>
            <Driver />
          </Auth>
        </LoginContext>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
