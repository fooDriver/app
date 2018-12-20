import React from 'react';
import hero from '../../assets/food.jpg';
import logo from '../../assets/foodriver.png';

import style from './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="hero-container">
          <img class="hero-image" src={hero} alt="fooDriver hero image" />
          <div class="hero-title">
            <span>Welcome to fooDriver</span>
          </div>
          <div class="hero-content">
            <div class="hero-text">
              <p>The mission of fooDriver is to provide food to people with low mobility or limited access to nutritious food.</p>
              <p>We run a fleet of mobile food pantries that delivers food to locations across Seattle.</p>
              <p class="extra-hero-text">If you would like to benefit from this organization, please feel free to sign up!</p>
              <p class="extra-hero-text">After signing up, you will be able to access pantry items and the locations that we currently deliver to.</p>
            </div>
            <img class="logo-image" src={logo} alt="fooDriver logo image" />
          </div>
        </div>
        <p class="extra-below-text">The mission of fooDriver is to provide food to people with low mobility or limited access to nutritious food.</p>
          <p class="extra-below-text">We run a fleet of mobile food pantries that delivers food to locations across Seattle.</p>
          <p class="below-text">If you would like to benefit from this organization, please feel free to sign up!</p>
          <p class="below-text">After signing up, you will be able to access pantry items and the locations that we currently deliver to.</p>
      </React.Fragment>
    )
  }
}


