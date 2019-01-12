import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFood: null,
    };
  }

  componentDidMount = () => {
    superagent
      .get(`${API}/admin/food`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        this.setState({
          allFood: response.body.sort((a, b) => (a.food > b.food) ? 1 : (b.food > a.food) ? -1 : 0),
        });
      });
  }

  render() {
    if (!this.state.allFood) {
      return <h3>Loading...</h3>;
    }

    return (
      <React.Fragment>
        <h2>All Food Items</h2>
        <ul>
          {this.state.allFood.map((obj) => (
            <li key={obj._id}>
              {obj.food}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

FoodList.contextType = LoginContext;

export default FoodList;