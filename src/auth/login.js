import React from "react";
import superagent from "superagent";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  acceptEmail = async event => {
    await this.setState({ username: event.target.value });
  };
  acceptPassword = async event => {
    await this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    superagent
      .post("https://foodriverdb.herokuapp.com/signin")
      .send(this.state)
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(console.error);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" onChange={this.acceptEmail} />
        </label>
        <label>Password:</label>
        <input type="password" onChange={this.acceptPassword} />
        <button type="submit">Log-in</button>
      </form>
    );
  }
}

export default LoginForm;
