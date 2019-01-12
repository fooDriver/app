import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DriverList from './middle-components/driver-list.jsx';
import ClientList from './middle-components/client-list.jsx';
import DonorList from './middle-components/donor-list.jsx';
import FoodList from './middle-components/food-list.jsx';

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
            <Link to={`/admin/client-list`}>Clients</Link>
          </li>
          <li>
            <Link to={`/admin/donor-list`}>Donators</Link>
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
            <Link to={`/admin/food-list`}>Food Items</Link>
          </li>
        </ul>

        <Route path='/admin/driver-list' component={DriverList} />
        <Route path='/admin/client-list' component={ClientList} />
        <Route path='/admin/donor-list' component={DonorList} />
        <Route path='/admin/food-list' component={FoodList} />
      </div>
    </Router>
  );
};

export default Admin;