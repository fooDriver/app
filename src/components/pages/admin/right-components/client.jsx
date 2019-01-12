import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import ClientSchema from '../../../schemas/user-schema.json';
import uiSchema from '../../../schemas/user-uiSchema.js';
import ReactModal from 'react-modal';
import Form from 'react-jsonschema-form';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      showModal: false,
    };
  }

  handleOpen = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleSubmit = (form) => {
    superagent
      .put(`${API}/admin/users/${this.props.match.params.id}`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .send(form.formData)
      .then(response => {
        this.setState({
          client: response.body,
        });
        this.props.refresh();
        this.handleClose();
      });
  }

  handleDelete = (event) => {
    superagent
      .delete(`${API}/admin/users/${this.props.match.params.id}`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({ client: null })
        alert('The user has been deleted');
        this.props.refresh();
        this.handleClose();
      });
  }

  getClient = (url) => {
    superagent
      .get(url)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          client: response.body,
        });
      });
  }

  componentDidMount = () => {
    this.getClient(`${API}${this.props.match.url}`);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.getClient(`${API}${this.props.match.url}`);
    }
  }

  render() {
    if (!this.state.client) {
      return <h3>Please Select a Client</h3>;
    }
    return (
      <React.Fragment>
        <button onClick={this.handleOpen}>Edit User</button>
        <button onClick={(event) => {
          if (window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS USER?'))
            this.handleDelete(event)
        }}>Delete User</button>

        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleClose}
        >
          <button onClick={this.handleClose}>Close</button>
          <Form
            schema={ClientSchema}
            uiSchema={uiSchema}
            formData={this.state.client}
            onSubmit={this.handleSubmit}
          />
        </ReactModal>

        <h3>{this.state.client.firstName} {this.state.client.lastName}</h3>
        <h4>Username</h4>
        <p>{this.state.client.username}</p>
        <h4>Role</h4>
        <p>{this.state.client.role}</p>
      </React.Fragment>
    );
  }
}

Client.contextType = LoginContext;

export default Client;