import React from 'react';

import superagent from 'superagent';
import If from '../components/if.js';

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

        <React.Fragment>

        <form onSubmit={this.handleSubmit} >
  
          First: <input 
          name='first' 
          placeholder = 'First Name' 
          type='text' 
          onChange={this.firstNameChange} required
          />
  
  
          Last: <input 
          name='last' 
          placeholder = 'Last Name' 
          type='text' 
          onChange={this.lastNameChange} required
          />
  
  
          Email: <input 
          name='email' 
          placeholder = 'john.doe@example.com' 
          type='email' 
          onChange={this.emailChange} required
          />
  
  
          Password: <input 
          name='password' 
          type='password' 
          onChange={this.passwordChange} required
          />
  
  
          Confirm Password: <input 
          name='confirmPassword'
          type='password' 
          required
          />
          <label>
          <input name='role' type='radio' onClick={this.roleChange} value='I would like to benefit from this organization'/>
          I would like to benefit from this organization
        </label>
        <label>
          <input name='role' type='radio' onClick={this.roleChange} value='I would like to donate to this organization'/>
          I would like to donate to this organization
        </label>
        <If condition={this.state.role === 'donator'}>
          <label>
            How would you like to donate?
            <input name='food' type='checkbox' onClick={this.donation} value='Food' />
            Food
            <input name='money' type='checkbox' onClick={this.donation} value='Money' />
            Money
        </label>
        </If>
        <label>
          <input name='role' type='radio' onClick={this.roleChange} value='I would like to work for this organization'/>
          I would like to work for this organization
        </label>
  
          <button type='submit'>Sign Me Up</button>
  
        </form>
        <If condition={this.state.signedup === true}>
          <h1>Thank you for signing up with fooDriver!<br /> Please visit the Home page while the admin reviews your account.</h1>
        </If>
  
        </React.Fragment>
  
      )
    }

  }