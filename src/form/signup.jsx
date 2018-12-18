import React from 'react';

import * as api from '../../lib/api.js';

export default class From extends React.Component {
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

  
  handleSubmit = form => {
    if(event.target.name === 'first'){
      // console.log(event.target.value);
      await this.setState({first:event.target.value});

      
    }
    
  };

  render() {

    return (

      <form>

        First: <input 
        name='first' 
        placeholder = 'First Name' 
        type='text' 
        noValidate 
        onChange={this.handleChange}
        />


        Last: <input 
        name='last' 
        placeholder = 'Last Name' 
        type='text' 
        noValidate
        onChange={this.handleChange}
        />


        Email: <input 
        name='email' 
        placeholder = 'john.doe@example.com' 
        type='text' 
        />


        Password: <input 
        name='password' 
        type='password' 
        />


        Confirm Password: <input 
        type='password' 
        />

        <button>Sign Me Up</button>

      </form>

    )

  }

}