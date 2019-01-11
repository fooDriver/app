import React from 'react';
import DriverList from './middle-components/driver-list.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

const Admin = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`/admin/driver-list`}>Drivers</Link>
          </li>
          <li>
            <Link to="/admin/client-list">Clients</Link>
          </li>
          <li>
            <Link to="/admin/donor-list">Donators</Link>
          </li>
          <li>
            <Link to="/admin/requests">Requests</Link>
          </li>
          <li>
            <Link to="/admin/donations">Donations</Link>
          </li>
          <li>
            <Link to="/admin/driver-routes">Driver Routes</Link>
          </li>
          <li>
            <Link to="/admin/route-stops">Route Stops</Link>
          </li>
          <li>
            <Link to="/admin/driver-pantries">Pantries</Link>
          </li>
          <li>
            <Link to="/admin/pantries">Pantry Food Quantities</Link>
          </li>
          <li>
            <Link to="/admin/food">Food Items</Link>
          </li>
        </ul>

        <Route path='/admin/driver-list' component={DriverList} />
      </div>
    </Router>
  );
};

export default Admin;