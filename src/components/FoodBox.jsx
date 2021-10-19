// #############################################
// ##  Iteration 1: Create FoodBox component  ##
// #############################################

import React from 'react';

class FoodBox extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, calories } = this.props.food;
    const amount = event.target.querySelector('#amount').value;
    this.props.onAddTodaysFood(name, calories, amount);
  };

  render() {
    const { name, calories, image } = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <form onSubmit={this.handleSubmit}>
                <div className="control">
                  <input
                    id="amount"
                    className="input"
                    type="number"
                    defaultValue="1"
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
