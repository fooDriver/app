import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Driver from '../right-components/driver.jsx';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class DriverList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: null,
    };
  }

  componentDidMount = () => {
    superagent
      .get(`${API}/admin/drivers`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          drivers: response.body,
        });
      });
  }

  render() {
    if (!this.state.drivers) {
      return <h3>Loading...</h3>;
    }

    return (
      <Router>
        <React.Fragment>
          <button>Add New Driver</button>
          <h3>Drivers</h3>
          <ul>
            {this.state.drivers.map((obj) => (
              <li key={obj._id}>
                <Link to={`/admin/driver-list/${obj._id}`}>
                  {obj.firstName} {obj.lastName}
                </Link>
              </li>
            ))}
          </ul>

          <Route path='/admin/driver-list/:id' component={Driver} />
        </React.Fragment>
      </Router>
    );
  }
}

DriverList.contextType = LoginContext;

export default DriverList;