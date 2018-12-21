import React from 'react';

import styles from './about.module.scss';

import donationBox from '../../assets/donation-box2.jpg';
import volunteers2 from '../../assets/delivering_hope.jpg';
import volunteers from '../../assets/foodforfree.jpg';

const About = props => {
  return (
    <React.Fragment>
      <div class={styles.container}>

        <section className={styles.fooDriver}>
        <h1>Makes It Easy</h1>
        <p>
          fooDriver is a mobile food pantry used to facilitate the donation process between the beneficiaries and the generous donators.
          The donation process is difficult for some people, whether it be due to lack of transportation or lack of time. fooDriver makes it easy to donate by picking up food donations at the location the donator chooses. fooDriver also makes it easy to receive food by bringing the fooDriver pantry to many locations across Seattle.
        </p>
        <img src={donationBox} alt='a picture'/>
        </section>

        <section className={styles.easyDonate}>
        <h1>Easy To Donate</h1>
        <p>
          fooDriver is a mobile donation distributer. Lack of time and long commutes should not be blockers for people with big hearts. When you sign up for fooDriver as a donator, you can select the donation format. fooDriver accepts online cash donations as well as food donations. fooDriver makes it easy by going to your place to pick up your food donations. Just fill out the form with your address and the food you would like to donate, and we will come right by. 
        </p>
        <img src={volunteers} alt='a picture'/>
        </section>

        <section className={styles.easyRequest}>
        <h1>Easy To Request</h1>
        <p>
          fooDriver distributes the donations. Transportation might be a blocker for beneficiaries to receive the donations. This is why we bring the food pantry to you. When you sign up for fooDriver as a beneficiary, you can view the fooDriver pantry items as well as the fooDriver routes. If you do not see an item that you would like, you can make a request and we will do our best to stock the item that you need.
        </p>
        <img src={volunteers2} alt='a picture'/>
        </section>


      </div>
      
      
      </React.Fragment>
  )
}


export default About;