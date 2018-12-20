import React from "react";
import superagent from "superagent";

import Map from "../modules/map";

import Auth from '../auth/auth.js';

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

  getToken = (auth) => {
    let value = "; " + document.cookie;
    let token = value.split("; " + auth + "=");
    if (token.length === 2) token = token.pop().split(";").shift();
    return token;
  }

  changeRequest = e => {
    this.setState({ requestItem: e.target.value });
  };

  submitRequest = e => {
    e.preventDefault();

    let token = this.getToken('auth');

    let request = { food: this.state.requestItem };
    superagent("post", "https://foodriverdb.herokuapp.com/request")
      .send(request)
      .set('Authorization', `Bearer ${token}`)
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
    let token = this.getToken('auth');

    let donation = {
      address: this.state.address,
      food: this.state.donationItem
    };
    superagent("post", "https://foodriverdb.herokuapp.com/donation")
      .send(donation)
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        this.setState({ donationItem: "", address: "" });
      })
      .catch(console.error);
  };

  componentDidMount() {
    superagent("get", "https://foodriverdb.herokuapp.com/pantries")
      .then(results => {
        this.setState({
          pantries: results.body,
          pantry: results.body[0],
          number: 1
        });
      })
      .catch(console.error);

    superagent("get", "https://foodriverdb.herokuapp.com/stops")
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
          <Auth capability='client'>
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
          </Auth>
          <Auth capability='donator'>
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
          </Auth>
        </main>
      );
    } else {
      let pantryItems = this.state.pantry.pantryItems.map(obj => (
        <li key={obj._id}>
          <p>{obj.quantity} {obj.food.food}</p>
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
          <Auth capability='client'>
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
          </Auth>
          <Auth capability='donator'>
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
          </Auth>

          {pantryButtons}

          <h3>Pantry {this.state.number} Items</h3>
          <ul>{pantryItems}</ul>
          <h3>Pantry {this.state.number} Route</h3>
          <ul>{stops}</ul>

          <Map stops={this.state.stops} />
        </main>
      );
    }
  }
}

export default RequestDonate;
