import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Admin from './admin.jsx';
import DriverList from './middle-components/driver-list.jsx';

class AdminRouter extends React.Component {
  render() {
    console.log('HELLO FROM ROUTER');
    return(
      <React.Fragment>
        <Admin />
        <Route path={`${match.path}/:topicId`} component={DriverList} />
      </React.Fragment>
    );
  }
}

const DriverList = ({match}) => {
  console.log('HELLO');
  return <h2>driver list</h2>
}

export default AdminRouter;