import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Donor from '../right-components/donor.jsx';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class DonorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donors: null,
    };
  }

  componentDidMount = () => {
    superagent
      .get(`${API}/admin/donors`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          donors: response.body,
        });
      });
  }

  render() {
    if (!this.state.donors) {
      return <h3>Loading...</h3>;
    }

    return (
      <Router>
        <React.Fragment>
          <h3>Donors</h3>
          <ul>
            {this.state.donors.map((obj) => (
              <li key={obj._id}>
                <Link to={`/admin/donor-list/${obj._id}`}>
                  {obj.firstName} {obj.lastName}
                </Link>
              </li>
            ))}
          </ul>

          <Route path='/admin/donor-list/:id'
            render={(props) => <Donor {...props} refresh={this.componentDidMount} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

DonorList.contextType = LoginContext;

export default DonorList;