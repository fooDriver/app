import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './context.js';
import { Redirect } from 'react-router';
import jwt from 'jsonwebtoken';

import styles from './login.module.scss';

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
    return (
      <div className={styles.loginPage}>
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <If condition={context.loggedIn}>
                <Redirect to={this.state.ability} />
              </If>
              <If condition={!context.loggedIn}>
                <div className={styles.login}>
                  <h2>fooDriver</h2>
                  <form className={styles.form} onSubmit={e => this.handleSubmit(e, context.login)}>
                    <div><label for="username">Username</label><input
                      name="username"
                      type="text"
                      onChange={this.handleChange}
                    /></div>
                    <div><label for="password">Password</label><input
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    /></div>
                    <div><input type="submit" value="Login" /></div>
                  </form>
                </div>
              </If>
            </>
          );
        }}
      </LoginContext.Consumer>
      </div>
    );
  }
}

export default Login;
