import React from 'react';
import './App.scss';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

class App extends React.Component {
  state = {
    showAddFoodForm: false,
    foodsList: foods,
  };

  toggleAddFoodForm = () => {
    this.setState({
      showAddFoodForm: this.state.showAddFoodForm ? false : true,
    });
  };

  addFood = (food) => {
    this.setState({
      foodsList: [
        ...this.state.foodsList,
        { name: food.name, calories: food.calories, image: food.image },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">IronNutrition</h1>
        <button
          id="add-food-btn"
          className="button is-info"
          onClick={this.toggleAddFoodForm}
        >
          Add new food
        </button>
        {this.state.showAddFoodForm && <AddFood onAddFood={this.addFood} />}
        {/* #################################
            ##  Iteration 2: Display food  ##
            ################################# */}
        {this.state.foodsList.map((food) => {
          return <FoodBox key={Math.random()} food={food} />;
        })}
      </div>
    );
  }
}

export default App;
