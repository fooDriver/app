import React from "react";
import jwt from "jsonwebtoken";
import { LoginContext } from "./context.context.js";

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          let user = context.token ? jwt.verify(context.token, "password") : {};
          console.log(user, "<-- THIS IS THE USER");
          let okToRender =
            context.loggedIn &&
            (this.props.capability
              ? user.capabilities.includes(this.props.capability)
              : true);

          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Auth;
