import React from 'react';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

// class DriverList extends React.Component {
//   render() {
//     return <h2>driver list</h2>
//   }
// }

const DriverList = ({match}) => {
  console.log('HELLO');
  return <h2>driver list</h2>
}

export default DriverList;