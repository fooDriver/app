import React from 'react';
import logo from '../../assets/foodriver.png';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import SignUp from '../pages/signup.jsx';
// import style from '../nav.module.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedHome: true,
      clickedAbout: false,
      clickedSignUp: false
    }
  }

  goHome() {
    console.log('Home Clicked');
    this.setState({ clickedHome: true, clickedAbout: false, clickedSignUp: false });
  }

  goToAbout() {
    console.log('About Clicked');
    this.setState({ clickedAbout: true, clickedHome: false, clickedSignUp: false });
  }

  goToSignUp() {
    console.log('SignUp Clicked');
    this.setState({ clickedSignUp: true, clickedHome: false, clickedAbout:false });
  }

  render() {
    if(this.state.clickedHome === true) {
      return (
        <React.Fragment>
          <img src={logo} alt="fooDriver logo" />
          <button onClick={this.goHome.bind(this)}>Home</button>
          <button onClick={this.goToAbout.bind(this)}>About</button>
          <button onClick={this.goToSignUp.bind(this)}>SignUp</button>
          <Home />
        </React.Fragment>
      )
    }
    if (this.state.clickedAbout === true) {
      return (
        <React.Fragment>
          <nav>
            <img src={logo} alt="fooDriver logo" />
            <button onClick={this.goHome.bind(this)}>Home</button>
            <button onClick={this.goToAbout.bind(this)}>About</button>
            <button onClick={this.goToSignUp.bind(this)}>SignUp</button>
          </nav>
          <About />
        </React.Fragment>
      )
    }

    if (this.state.clickedSignUp === true) {
      return (
        <React.Fragment>
          <nav>
            <img src={logo} alt="fooDriver logo" />
            <button onClick={this.goHome.bind(this)}>Home</button>
            <button onClick={this.goToAbout.bind(this)}>About</button>
            <button onClick={this.goToSignUp.bind(this)}>SignUp</button>
          </nav>
          <SignUp />
        </React.Fragment>
      )
    }
  }
}