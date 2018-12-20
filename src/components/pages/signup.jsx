import React from 'react';
import Form from '../form/signup.jsx';

import styles from '../styles/signedup.module.scss';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className={styles.signup}>
        <h1>Sign up for fooDriver!</h1>
        <Form />
      </div>
    )
  }
}