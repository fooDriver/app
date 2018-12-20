import React from 'react';
import styles from './footer.module.scss';


function Footer() {
    return (
      <footer className={styles.footer}>

        <span className={styles.footerName}>fooDriver</span>

        <span className={styles.rights}>&copy; fooDriver All Rights Reserved</span>

        <span className={styles.contact}>Contact</span>
       
      </footer>
    );
  }


export default Footer;









