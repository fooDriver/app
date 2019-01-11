import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: null,
    };
  }

  getDriver = (url) => {
    superagent
      .get(url)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          driver: response.body,
        });
      });
  }

  componentDidMount = () => {
    this.getDriver(`${API}${this.props.match.url}`);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.getDriver(`${API}${this.props.match.url}`);
    }
  }

  render() {
    if (!this.state.driver) {
      return <h3>Loading...</h3>;
    }
    return (
      <React.Fragment>
        <button>Edit User</button>
        <button>Delete User</button>
        <h3>{this.state.driver.firstName} {this.state.driver.lastName}</h3>
        <h4>Username</h4>
        <p>{this.state.driver.username}</p>
        <h4>Role</h4>
        <p>{this.state.driver.role}</p>
      </React.Fragment>
    );
  }
}

Driver.contextType = LoginContext;

export default Driver;