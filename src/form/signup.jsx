import React from 'react';

import * as api from '../lib/api.js';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
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

  comparePassword = pass => {
    if(this.state.password === pass) {
      console.log(this.state);
      superagent.post('https://foodriverdb.herokuapp.com/signup')
      .set('Content-Type', 'application/json')
      .send(this.state)
      return (console.log(this.state), true);
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

        <button type='submit'>Sign Me Up</button>

      </form>

    )

  }


};
