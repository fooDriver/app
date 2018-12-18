import React from 'react';

// import * as api from '../lib/api.js';
import superagent from 'superagent';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedup: false,
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

    if(this.state.signedup === false) {
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
  
          <button type='submit'>Sign Me Up</button>
  
        </form>
  
        </React.Fragment>
  
      )
    } else {
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
  
          <button type='submit'>Sign Me Up</button>
  
        </form>
  
        <h1>Thank you for signing up with fooDriver!<br /> Please visit the Home page while the admin reviews your account.</h1>

        </React.Fragment>
  
      )
    }

  }


};