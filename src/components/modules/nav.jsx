import React from 'react';
import logo from '../../assets/foodriver.png';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  goHome() {
    console.log('Home Clicked');
    this.setState({ clicked: false });
  }

  goToAbout() {
    console.log('About Clicked');
    this.setState({ clicked: true });
  }

  render() {
    if(this.state.clicked === false) {
      return (
        <React.Fragment>
          <img src={logo} alt="fooDriver logo" />
          <button onClick={this.goHome.bind(this)}>Home</button>
          <button onClick={this.goToAbout.bind(this)}>About</button>
          <Home />
        </React.Fragment>
      )
    }
    if (this.state.clicked === true) {
      return (
        <React.Fragment>
          <nav>
            <img src={logo} alt="fooDriver logo" />
            <button onClick={this.goHome.bind(this)}>Home</button>
            <button onClick={this.goToAbout.bind(this)}>About</button>
          </nav>
          <About />
        </React.Fragment>
      )
    }
  }
}