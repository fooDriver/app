import superagent from 'superagent';
import querystring from 'querystring';
import React from 'react';
import { LoginContext } from './context.js';
import { Redirect } from 'react-router';

//const API = 'http://localhost:3000';
const API = 'https://foodriverdb.herokuapp.com';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        console.log('response is ',response);
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          console.log('CTX', context);
          return (
            <>
              <If condition={context.loggedIn}>
                <Redirect to='/' />
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