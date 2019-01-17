import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class RouteStops extends React.Component {
  render() {
    return (
      <h2>Hello</h2>
    );
  }
}

RouteStops.contextType = LoginContext;

export default RouteStops;