import React from 'react';
import Form from '../form/signup.jsx';

import styles from '../styles/signedup.module.scss';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form />
      </div>
    )
  }
}