// #############################################
// ##  Iteration 1: Create FoodBox component  ##
// #############################################

import React from 'react';

class FoodBox extends React.Component {
  render() {
    console.log(this.props.foods[0].image);
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.foods[0].image} alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Pizza</strong> <br />
                <small>400 cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
