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

  render() {

    return (

      <form>

        First: <input name='first' placeholder = 'First Name' type='text' />
        Last: <input name='last' placeholder = 'Last Name' type='text' />
        Email: <input name='email' placeholder = 'john.doe@example.com' type='text' />
        Password: <input name='password' type='password' />
        Confirm Password: <input type='password' />

        <button>Sign Me Up</button>

      </form>

    )

  }

}