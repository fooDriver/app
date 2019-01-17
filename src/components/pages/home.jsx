import React from 'react';
import logo from '../../assets/foodriver.png';

import styles from './home.module.scss';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.heroContainer}>
          <div className={styles.container}>
            <h1 className={styles.smallTitle}>Welcome</h1>
            <h1 className={styles.bigTitle}>Welcome to fooDriver</h1>
            <div className={styles.heroText}>
              <p>The mission of fooDriver is to provide food to people with low mobility or limited access to nutritious food.</p>
              <p>We run a fleet of mobile food pantries that delivers food to locations across Seattle.</p>
              <p className={styles.extraHeroText}>If you would like to benefit from this organization, please feel free to sign up!</p>
              <p className={styles.extraHeroText}>After signing up, you will be able to access pantry items and the locations that we currently deliver to.</p>
            </div>
            <img src={logo} alt="fooDriver logo" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}


