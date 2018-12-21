import React from 'react';

import styles from './about.module.scss';

import hero from '../../assets/hero.jpg';
import donationBox from '../../assets/donation-box.jpg';
import volunteers from '../../assets/volunteers.jpg';
import volunteers2 from '../../assets/volunteers2.jpg';

const About = props => {
  return (
    <React.Fragment>
      <div class={styles.container}>

        <section className={styles.fooDriver}>
        <h1>Makes It Easy</h1>
        <p>fooDriver provides a platform to both donator and beneficiary to facilitate the donation process. Lots of food goes wasted for many reasons while there are people in need around us. While there is an  intention but lack of time and interest in commute are the blockers for more donation, fooDriver identifies the needs and makes it easy to donate and make a request for the beneficiary.
        </p>
        <img src={donationBox} alt='a picture'/>
        </section>

        <section className={styles.easyDonate}>
        <h1>Easy To Donate</h1>
        <p>fooDriver is a mobile donation distributer. lack of time and long commute should not be the blockers for people with big hearts. Once you download the app you can select the donation format. fooDriver accepts online cash donation and also will go to your place to pick up food donation. Donator can see the fooDriver's food banck and make a request to add new items as well as adding to the existing items in the pantry.</p>
        <img src={volunteers} alt='a picture'/>
        </section>

        <section className={styles.easyRequest}>
        <h1>Easy To Request</h1>
        <p>fooDriver distributes the donations. Transportation might be a blocker for the beneficiary to benefit from the donations made. Beneficiary can download the app and visit the fooDriver pantry list. She/he can make a request for the available items. fooDriver also accepts request for new items and notifies the donators.</p>
        <img src={volunteers2} alt='a picture'/>
        </section>


      </div>
      
      
      </React.Fragment>
  )
}


export default About;