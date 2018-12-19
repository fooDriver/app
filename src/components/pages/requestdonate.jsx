import React from "react";
import superagent from "superagent";

class RequestDonate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestItem: "",
      donationItem: "",
      address: "",
      pantries: "",
      pantry: "",
      number: "",
      allStops: "",
      stops: ""
    };
  }

  changeRequest = e => {
    this.setState({ requestItem: e.target.value });
  };

  submitRequest = e => {
    e.preventDefault();

    let request = { food: this.state.requestItem };
    superagent("post", "https://foodriverdb.herokuapp.com/request")
      .auth("mary@berry.com", "maryberry")
      .send(request)
      .then(results => {
        this.setState({ requestItem: "" });
      })
      .catch(console.error);
  };

  changeAddress = e => {
    this.setState({ address: e.target.value });
  };

  changeDonation = e => {
    this.setState({ donationItem: e.target.value });
  };

  submitDonation = e => {
    e.preventDefault();

    let donation = {
      address: this.state.address,
      food: this.state.donationItem
    };
    superagent("post", "https://foodriverdb.herokuapp.com/donation")
      .auth("mary@berry.com", "maryberry")
      .send(donation)
      .then(results => {
        this.setState({ donationItem: "", address: "" });
      })
      .catch(console.error);
  };

  componentDidMount() {
    superagent("get", "https://foodriverdb.herokuapp.com/admin/pantries")
      .auth("mary@berry.com", "maryberry")
      .then(results => {
        this.setState({
          pantries: results.body,
          pantry: results.body[0],
          number: 1
        });
      })
      .catch(console.error);

    superagent("get", "https://foodriverdb.herokuapp.com/admin/stops")
      .auth("mary@berry.com", "maryberry")
      .then(results => {
        let route1 = results.body.filter(obj => obj.route.name === "Route 1");
        this.setState({
          allStops: results.body,
          stops: route1
        });
      })
      .catch(console.error);
  }

  selectPantry = number => {
    let route = this.state.allStops.filter(
      obj => obj.route.name === "Route " + number
    );
    this.setState({
      pantry: this.state.pantries[number - 1],
      number: number,
      stops: route
    });
  };

  render() {
    if (this.state.pantries === "" || this.state.stops === "") {
      return (
        <main>
          <form onSubmit={this.submitRequest}>
            <label>Make a request</label>
            <br />
            <input
              type="text"
              placeholder="Enter your request here"
              value={this.state.requestItem}
              onChange={this.changeRequest}
            />
            <br />
            <button type="submit">Request!</button>
          </form>
          <br />
          <form onSubmit={this.submitDonation}>
            <label>Make a donation</label>
            <br />
            <input
              type="text"
              placeholder="Enter your address here"
              value={this.state.address}
              onChange={this.changeAddress}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your donation here"
              value={this.state.donationItem}
              onChange={this.changeDonation}
            />
            <br />
            <button type="submit">Donate!</button>
          </form>
          <br />
        </main>
      );
    } else {
      let pantryItems = this.state.pantry.pantryItems.map(obj => (
        <li key={obj._id}>
          <p>{obj.food.food}</p>
        </li>
      ));

      let stops = this.state.stops.map(obj => (
        <li key={obj._id}>
          <p>{obj.location}</p>
        </li>
      ));

      let pantryButtons = this.state.pantries.map((obj, idx) => (
        <button key={idx} onClick={() => this.selectPantry(idx + 1)}>
          Pantry {idx + 1}
        </button>
      ));

      return (
        <main>
          <form onSubmit={this.submitRequest}>
            <label>Make a request</label>
            <br />
            <input
              type="text"
              placeholder="Enter your request here"
              value={this.state.requestItem}
              onChange={this.changeRequest}
            />
            <br />
            <button type="submit">Request!</button>
          </form>
          <br />
          <form onSubmit={this.submitDonation}>
            <label>Make a donation</label>
            <br />
            <input
              type="text"
              placeholder="Enter your address here"
              value={this.state.address}
              onChange={this.changeAddress}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your donation here"
              value={this.state.donationItem}
              onChange={this.changeDonation}
            />
            <br />
            <button type="submit">Donate!</button>
          </form>
          <br />

          {pantryButtons}

          <h3>Pantry {this.state.number} Items</h3>
          <ul>{pantryItems}</ul>
          <h3>Pantry {this.state.number} Route</h3>
          <ul>{stops}</ul>

        </main>
      );
    }
  }
}

export default RequestDonate;
