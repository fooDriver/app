import React from "react";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { helpMeLogIn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(state => ({
      helpMeLogIn: !state.helpMeLogIn
    }));
  };
  render() {
    return <button onClick={this.handleClick}>Forgot Password?</button>;
  }
}

export default ForgotPassword;
