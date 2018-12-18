import React from 'react';

import * as api from '../lib/api.js';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: ''
    }
  }

  firstNameChange = async event => {
    await this.setState({first: event.target.value});
  }

  lastNameChange = async event => {
    await this.setState({last: event.target.value});
  }

  emailChange = async event => {
    await this.setState({email: event.target.value});
  }

  passwordChange = async event => {
    await this.setState({ password: event.target.value });
    console.log(this.state);
  }

  comparePassword = pass => {
    if(this.state.password === pass) {
      return true;
    } else {
      alert('The passwords you have entered do not match.');
    }
  }


    handleSubmit() {
    
    }

  render() {

    return (

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
        type='password' 
        required
        />

        <button type='submit'>Sign Me Up</button>

      </form>

    )

  }


};
