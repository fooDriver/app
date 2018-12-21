import React from 'react';
import styles from './footer.module.scss';

function Footer() {
    return (
      <footer className={styles.footer}>

        <span className={styles.name}>fooDriver</span>

        <span className={styles.rights}>&copy; 2018 fooDriver. All rights reserved.</span>

      </footer>
    );
  }

export default Footer;
