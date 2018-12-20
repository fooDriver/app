import React from 'react';

import styles from './about.module.scss';

import hero from '../../assets/hero.jpg';

const About = props => {
  return (
    <React.Fragment>
      <div class={styles.container}>
    
        <section className={styles.fooDrive}>
        <h1>foo Driver</h1>
        <p>Makes it easy to donate and make a request.It facilitates delivering donations to the people who are in need. It creates a platform to identify who is in need and who is willing to help. We bring the distributer to you.</p>
        <img src='https://via.placeholder.com/300x200' alt='a picture'/>
        </section>

        <section className={styles.easyDonate}>
        <h2>Easy Donate</h2>
        <p>Facilitates delivering donations to the people who are in need. It creates a platform to identify who is in need and who is willing to help. We bring the distributer to you.</p>
        <img src='https://via.placeholder.com/300x200' alt='a picture'/>
        </section>

        <section className={styles.easyRequest}>
        <h2>Easy Request</h2>
        <p>Facilitates delivering donations to the people who are in need. It creates a platform to identify who is in need and who is willing to help. We bring the distributer to you.</p>
        <img src='https://via.placeholder.com/300x200' alt='a picture'/>
        </section>


      </div>
      
      
      </React.Fragment>
  )
}


export default About;