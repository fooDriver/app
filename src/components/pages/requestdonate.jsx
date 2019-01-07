import React from "react";
import superagent from "superagent";
import Map from "../modules/map";
import Auth from '../auth/auth.js';
import { LoginContext } from '../auth/context.js';

import styles from './requestdonate.module.scss';

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
      .send(request)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(results => {
        this.setState({ requestItem: "" });
      })
      .catch(console.error);
    
    alert('Thank you for your request!')
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
      .send(donation)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(results => {
        this.setState({ donationItem: "", address: "" });
      })
      .catch(console.error);

    alert('Thank you for your donation!');
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
      return <h2>Loading...</h2>;
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
        <div className={styles.bg}>
        <div className={styles.request}>
          <Auth capability='client'>
          <form onSubmit={this.submitRequest}>
            <label>Make a request</label>
            <input
              type="text"
              placeholder="Enter your request here"
              value={this.state.requestItem}
              onChange={this.changeRequest}
            />
            <button type="submit">Request!</button>
          </form>
          </Auth>
          <Auth capability='donator'>
          <form onSubmit={this.submitDonation}>
            <label>Make a donation</label>
            <input
              type="text"
              placeholder="Enter your address here"
              value={this.state.address}
              onChange={this.changeAddress}
            />
            <input
              type="text"
              placeholder="Enter your donation here"
              value={this.state.donationItem}
              onChange={this.changeDonation}
            />
            <button type="submit">Donate!</button>
          </form>
          </Auth>

          <div className={styles.pantryButtons}>
            {pantryButtons}
          </div>
          <div className={styles.pantryItems}>
            <h3>Pantry {this.state.number} Items</h3>
            <ul>{pantryItems}</ul>
          </div>
          <div className={styles.pantryRoute}>
            <h3>Pantry {this.state.number} Route</h3>
            <ul>{stops}</ul>
          </div>
          <div className={styles.map}>
            <Map stops={this.state.stops} />
          </div>

        </div>
        </div>
      );
    }
  }
}

RequestDonate.contextType = LoginContext;

export default RequestDonate;
