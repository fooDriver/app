import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './context.js';
import { Redirect } from 'react-router';
import jwt from 'jsonwebtoken';

//const API = 'http://localhost:3000';
const API = 'https://foodriverdb.herokuapp.com';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ability: null,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let user = jwt.decode(response.text);
        this.setState({
          ability: `/${user.capabilities[0]}`,
        });
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };

  render() {
    console.log('STATE IS',this.state);
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <If condition={context.loggedIn}>
                <Redirect to={this.state.ability} />
              </If>
              <If condition={!context.loggedIn}>
                <div>
                  <form onSubmit={e => this.handleSubmit(e, context.login)}>
                    <input
                      placeholder="username"
                      name="username"
                      onChange={this.handleChange}
                    />
                    <input
                      placeholder="password"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    />
                    <input type="submit" value="login" />
                  </form>
                </div>
              </If>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Login;