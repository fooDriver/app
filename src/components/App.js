import React, { Component } from 'react';
import Nav from './modules/nav.jsx';
import Footer from './modules/footer.jsx';
import RequestDonate from './pages/requestdonate.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <RequestDonate />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
