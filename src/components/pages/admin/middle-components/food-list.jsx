import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../../../auth/context.js';

const API = 'http://localhost:3000';
//const API = 'https://foodriverdb.herokuapp.com';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFood: null,
      filteredFood: null,
      newFood: '',
    };
  }

  filterFood = (event) => {
    let updatedList = this.state.allFood;
    updatedList = updatedList.filter(food => {
      return food.food.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      filteredFood: updatedList,
      newFood: event.target.value,
    });
  }

  newFood = (event) => {
    if (this.state.filteredFood.some(food => food['food'].toLowerCase() === this.state.newFood.toLowerCase())) {
      alert('That food is already listed!');
      event.preventDefault();
      return;
    }
    else {
      superagent
        .post(`${API}/admin/food`)
        .send({ food: this.state.newFood })
        .set('Authorization', `Bearer ${this.context.token}`)
        .then(response => {
          console.log('RESPONSE', response.body);
        });
    }
  }

  handleDelete = (foodID) => {
    superagent
      .delete(`${API}/admin/food/${foodID}`)
      .set('Authorization', `Bearer ${this.context.token}`)
      .then(response => {
        alert('The food has been deleted');
        this.componentDidMount();
      });
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
    let list = this.state.allFood
    if (!list) {
      return <h3>Loading...</h3>;
    }

    if (list && this.state.filteredFood) {
      list = this.state.filteredFood;
    }

    return (
      <React.Fragment>
        <h2>{list.length} {list.length > 1 || list.length === 0 ? 'items' : 'item'}</h2>
        <form onSubmit={this.newFood}>
          <input type='text' placeholder='Search Food' value={this.state.newFood} onChange={this.filterFood} />
          <input type='submit' value='Add Food' />
        </form>
        <ul>
          {list.map((obj) => (
            <li key={obj._id}>
              {obj.food}
              <button onClick={(event) => {
                if (window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS FOOD?'))
                  this.handleDelete(obj._id)
                }}>DELETE</button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

FoodList.contextType = LoginContext;

export default FoodList;