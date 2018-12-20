import React from 'react';

import superagent from 'superagent';
import If from '../if.js';

import styles from '../styles/signedup.module.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedup: false,
      role: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    }
    
  }

  firstNameChange = async event => {
    await this.setState({firstName: event.target.value});
  }

  lastNameChange = async event => {
    await this.setState({lastName: event.target.value});
  }

  emailChange = async event => {
    await this.setState({username: event.target.value});
  }

  passwordChange = async event => {
    await this.setState({ password: event.target.value });
    // console.log(this.state);
  }

  roleChange = async event => {
    // console.log(event.target.value);
    let value = event.target.value;
    let requestorRole = 'I would like to benefit from this organization';
    let donatorRole = 'I would like to donate to this organization';
    let driverRole = 'I would like to work for this organization';
    if(value === requestorRole) {
      await this.setState({ role: 'client' });
    }
    if(value === donatorRole) {
      await this.setState({ role: 'donator' });
    }
    if(value === driverRole) {
      await this.setState({ role: 'driver' });
    }
    console.log(this.state.role);
  }

  comparePassword = pass => {
    if(this.state.password === pass) {
      superagent.post('https://foodriverdb.herokuapp.com/signup')
        .send(this.state)
        .then(result => {
          console.log(result.text);
          return result.text;
        })
        .catch(console.error);
      this.setState({ signedup: true });
      return true;
    } else {
      alert('The passwords you have entered do not match.');
    }
  }


  handleSubmit = (event) => {
      event.preventDefault();
      this.comparePassword(event.target.confirmPassword.value);
  }

  render() {
      return (

        <div className={styles.container}>

        <form className={styles.form} onSubmit={this.handleSubmit} >
  
        <label className={styles.label} for='first'>First:</label>
        <input className={styles.input} name='first' placeholder = 'First Name' type='text' onChange={this.firstNameChange} required/>
  
  
          <label className={styles.label} for='last'>Last:</label>
          <input className={styles.input} name='last' placeholder = 'Last Name' type='text' onChange={this.lastNameChange} required />
  
  
          <label className={styles.label} for='email'>Email:</label>
          <input className={styles.input} name='email' placeholder = 'john.doe@example.com' type='email' onChange={this.emailChange} required />
  
  
          <label className={styles.label} for='password'>Password:</label> 
          <input className={styles.input} name='password' type='password' onChange={this.passwordChange} required />
  
  
          <label className={styles.label} for='confirmPassword'>Confirm Password:</label>
          <input className={styles.input} name='confirmPassword' type='password' required />

          <ul>
            <li>
              <input className={styles.input} name='role' type='radio' onClick={this.roleChange} value='I would like to benefit from this organization'/>
              I would like to benefit from this organization
            </li>

            <li>
              <input className={styles.input} name='role' type='radio' onClick={this.roleChange} value='I would like to donate to this organization'/>
              I would like to donate to this organization
            </li>

          <If condition={this.state.role === 'donator'}>
          <br />
            How would you like to donate?
            <li>
              <input className={styles.input} name='food' type='checkbox' onClick={this.donation} value='Food' />
              Food
            </li>
            <li>
              <input className={styles.input} name='money' type='checkbox' onClick={this.donation} value='Money' />
              Money
            </li>
            <br />
          </If>

            <li>
              <input className={styles.input} name='role' type='radio' onClick={this.roleChange} value='I would like to work for this organization'/>
              I would like to work for this organization
            </li>

            </ul>

  
          <button type='submit'>Sign Me Up</button>
  
        </form>
        <If condition={this.state.signedup === true}>
          <h1>Thank you for signing up with fooDriver!<br /> Please visit the Home page while the admin reviews your account.</h1>
        </If>
  
        </div>
  
      )
    }

  }