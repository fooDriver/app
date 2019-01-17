import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DriverList from './middle-components/driver-list.jsx';
import ClientList from './middle-components/client-list.jsx';
import DonorList from './middle-components/donor-list.jsx';
import RouteStops from './middle-components/route-stops.jsx';
import FoodList from './middle-components/food-list.jsx';

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
            <Link to={`/admin/request-list`}>Requests</Link>
          </li>
          <li>
            <Link to={`/admin/donation-list`}>Donations</Link>
          </li>
          <li>
            <Link to={`/admin/driver-route-list`}>Driver Routes</Link>
          </li>
          <li>
            <Link to={`/admin/route-stops-list`}>Route Stops</Link>
          </li>
          <li>
            <Link to={`/admin/pantry-list`}>Pantries</Link>
          </li>
          <li>
            <Link to={`/admin/quantity-list`}>Pantry Food Quantities</Link>
          </li>
          <li>
            <Link to={`/admin/food-list`}>Food Items</Link>
          </li>
        </ul>

        <Route path='/admin/driver-list' component={DriverList} />
        <Route path='/admin/client-list' component={ClientList} />
        <Route path='/admin/donor-list' component={DonorList} />
        <Route path='/admin/request-list' component={'hello'} />
        <Route path='/admin/donation-list' component={'hello'} />
        <Route path='/admin/driver-route-list' component={'hello'} />
        <Route path='/admin/route-stops-list' component={RouteStops} />
        <Route path='/admin/pantry-list' component={'hello'} />
        <Route path='/admin/quantity-list' component={'hello'} />
        <Route path='/admin/food-list' component={FoodList} />
      </div>
    </Router>
  );
};

export default Admin;