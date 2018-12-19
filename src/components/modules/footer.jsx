import React from 'react';

import styles from './footer.module.scss';


function Footer() {
    return (
      <footer className={styles.footer}>
        <span className={styles.footerName}>fooDriver</span>
        <span className={styles.corp}>&copy; fooDrive All Rights reserved</span>
      </footer>
    );
  }


export default Footer;







