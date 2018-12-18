import React, { Component } from 'react';
import Nav from './modules/nav.jsx';
import Footer from './modules/footer.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
