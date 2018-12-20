import React from "react";

class CreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { needToCreate: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      needToCreate: !state.needToCreate
    }));
  }
  render() {
    return <button onClick={this.handleClick}>Sign-up</button>;
  }
}

export default CreateNew;
