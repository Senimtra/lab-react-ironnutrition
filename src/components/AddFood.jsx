// #################################
// ##  Iteration 3: Add new food  ##
// #################################

import React from 'react';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  updateFood = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddFood(this.state);
  };

  render() {
    return (
      <div id="add-food-form">
        <h3 className="title is-4">Please add your food</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.updateFood}
            placeholder="Name of the food"
          />
          <input
            className="input"
            name="calories"
            type="number"
            value={this.state.calories}
            onChange={this.updateFood}
            placeholder="Containing calories"
          />
          <input
            className="input"
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.updateFood}
            placeholder="Some nice picture of your food"
          />
          <button className="button is-info">Add food</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
