import React from 'react';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import Map from '../modules/map.jsx';

//const API = 'http://localhost:3000';
const API = 'https://foodriverdb.herokuapp.com';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pantry: [],
      route: null,
      stops: [],
    };
  };
  
  getToken = (auth) => {
    let value = "; " + document.cookie;
    let token = value.split("; " + auth + "=");
    if (token.length === 2) token = token.pop().split(";").shift();
    return token;
  }
  
  getUser = () => {
    let token = this.getToken('auth');
    let user = jwt.decode(token);
    return user.id;
  }
  
  componentDidMount() {
    let url = `${API}/driver/driver-routes/${this.getUser()}`;
    console.log({url});
    let token = this.getToken('auth');
    console.log(token);
    superagent
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        let pantry = [];
        response.body.itemsToSend[1].forEach(item => {
          let obj = {food: item.food.food, quantity: item.quantity};
          pantry.push(obj);
        });
      
        this.setState({
          name: response.body.itemsToSend[0].firstName + ' ' + response.body.itemsToSend[0].lastName,
          pantry: response.body.itemsToSend[1],
          route: response.body.itemsToSend[2][0].route.name,
          stops: response.body.itemsToSend[2],
        });
      
      });
  }

  decrementClick = (food) => {
    let clone = [...this.state.pantry];
    let foundFood = clone.find(item => {
      return (item._id === food._id);
    });
    if (foundFood.quantity === 0) {
      alert('You cannot have less than 0 items!');
    }
    else {
      foundFood.quantity -= 1;
      
      let url = `${API}/driver/quantity/${food._id}`;
      console.log(url);
      let token = this.getToken('auth');
      
      superagent
        .post(url)
        .send(foundFood)
        .set('Authorization', `Bearer ${token}`)
        .then(response => {
          console.log(response);
        });
    }
    this.setState({
      pantry: clone,
    });
    
  }
  
  incrementClick = (food) => {
    let clone = [...this.state.pantry];
    let foundFood = clone.find(item => {
      return (item._id === food._id);
    });
    foundFood.quantity += 1;
    
    let url = `${API}/driver/quantity/${food._id}`;
    console.log(url);
    let token = this.getToken('auth');

    superagent
      .post(url)
      .send(foundFood)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        console.log(response);
      });
    this.setState({
      pantry: clone,
    });
  }
  
  render() {
    console.log(this.state.stops);
    if (!this.state.name) {
      return <h2>Loading...</h2>;
    }
    else {
      return (
        <React.Fragment>
          <h2>Let's Get Moving {this.state.name}!</h2>
          <h3>Your route for the day: {this.state.route}</h3>
          <ul>
            {this.state.stops.map(obj => (
              <li key={obj._id}>
                <p>{obj.location}</p>
              </li>
            ))}
          </ul>
          <h3>Your Pantry:</h3>
          <ul>
            {this.state.pantry.map((obj) => (
              <li key={obj._id}>
                <button onClick={ () => this.decrementClick(obj) }>-</button>{obj.quantity}<button onClick={ () => this.incrementClick(obj) }>+</button>
                {obj.food.food}
              </li>
            ))}
          </ul>
          <Map stops={this.state.stops} />
        </React.Fragment>
      );
    }
  }
};

export default Driver;