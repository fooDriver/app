import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import Map from '../map/map.jsx';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class RouteStops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStops: "",
      stops: ""
    };
  }

  changeRequest = e => {
    this.setState({ requestItem: e.target.value });
  };

  componentDidMount() {

    superagent("get", "https://foodriverdb.herokuapp.com/stops")
      .then(results => {
        let route1 = results.body.filter(obj => obj.route.name === "Route 1");
        this.setState({
          allStops: results.body,
          stops: route1,
        });
      })
      .catch(console.error);
  }

  render() {
    if (this.state.stops === "") {
      return <h2>Loading...</h2>;
    }
    else {
      let stops = this.state.stops.map(obj => (
        <li key={obj._id}>
          <p>{obj.location}</p>
        </li>
      ));

      return (
          <div>
            <Map stops={this.state.stops} />
          </div>
      );
    }
  }
}

RouteStops.contextType = LoginContext;

export default RouteStops;