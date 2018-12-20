import React, { Component } from 'react';
import Footer from './modules/footer.jsx';
import RequestDonate from './pages/requestdonate.jsx';
import Driver from './pages/driver.jsx';
import Login from './auth/login.js';
import LoginContext from './auth/context.js';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from './modules/nav.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Logout from './auth/logout.js';
import Signup from './pages/signup.jsx';
import About from './pages/about.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <LoginContext>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/driver' component={Driver} />
            <Route path='/client' component={RequestDonate} />
            <Route path='/donator' component={RequestDonate} />
            <Route path="/login" component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path="/signup" component={Signup} />
            <Footer />
          </div>
          </LoginContext>
        </BrowserRouter>
        
      </React.Fragment>
    );
  }
}

export default App;
