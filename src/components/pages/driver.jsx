import React from 'react';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import Map from '../modules/map.jsx';
import { LoginContext } from '../auth/context.js';

import styles from './driver.module.scss';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

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

  changeQuantity = (food, change) => {
    let clone = [...this.state.pantry];
    let foundFood = clone.find(item => {
      return (item._id === food._id);
    });

    if (change === 'inc') {
      foundFood.quantity += 1;
    }
    else {
      if (foundFood.quantity === 0) {
        alert('You cannot have less than 0 items!');
      }
      else {
        foundFood.quantity -= 1;
      }
    }

    let url = `${API}/driver/quantity/${food._id}`;
    
    superagent
      .post(url)
      .send(foundFood)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        console.log(response);
      });

    this.setState({
      pantry: clone,
    });
  }

  decrementClick = (food) => {
    this.changeQuantity(food, 'dec');
  }
  
  incrementClick = (food) => {
    this.changeQuantity(food, 'inc');
  }
  
  componentDidMount() {
    let user = jwt.decode(this.context.token);
    let url = `${API}/driver/driver-routes/${user.id}`;

    superagent
      .get(url)
      .set('Authorization', `Bearer ${this.context.token}`)
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
  
  render() {
    if (!this.state.name) {
      return <h2>Loading...</h2>;
    }
    else {
      return (
        <div className={styles.drive}>
          <h2>Let's Get Moving {this.state.name}!</h2>
          <div className={styles.pantryItems}>
          <h3>Your Pantry:</h3>
          <ul>
            {this.state.pantry.map((obj) => (
              <li key={obj._id}>
                <button onClick={ () => this.decrementClick(obj) }>-</button><span>{obj.quantity}</span><button onClick={ () => this.incrementClick(obj) }>+</button>
                {obj.food.food}
              </li>
            ))}
          </ul>
          </div>
          <div className={styles.pantryRoute}>
          <h3>Your route for the day: {this.state.route}</h3>
          <ul>
            {this.state.stops.map(obj => (
              <li key={obj._id}>
                <p>{obj.location}</p>
              </li>
            ))}
          </ul>
          </div>
          <div className={styles.map}>
            <Map stops={this.state.stops} />
          </div>
        </div>
      );
    }
  }
};

Driver.contextType = LoginContext;

export default Driver;
