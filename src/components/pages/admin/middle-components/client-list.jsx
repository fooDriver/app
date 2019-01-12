import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Client from '../right-components/client.jsx';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: null,
    };
  }

  componentDidMount = () => {
    superagent
      .get(`${API}/admin/clients`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          clients: response.body,
        });
      });
  }

  render() {
    if (!this.state.clients) {
      return <h3>Loading...</h3>;
    }

    return (
      <Router>
        <React.Fragment>
          <h3>Clients</h3>
          <ul>
            {this.state.clients.map((obj) => (
              <li key={obj._id}>
                <Link to={`/admin/client-list/${obj._id}`}>
                  {obj.firstName} {obj.lastName}
                </Link>
              </li>
            ))}
          </ul>

          <Route path='/admin/client-list/:id'
            render={(props) => <Client {...props} refresh={this.componentDidMount} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

ClientList.contextType = LoginContext;

export default ClientList;