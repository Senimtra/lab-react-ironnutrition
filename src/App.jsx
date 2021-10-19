import React from 'react';
import './App.scss';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';

import foods from './foods.json';
class App extends React.Component {
  state = {
    showAddFoodForm: false,
    foodsList: foods,
    searchList: [],
    searchString: '',
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

  updateSearchString = (updatedString) => {
    Promise.resolve(
      this.setState({
        searchString: updatedString,
      })
    ).then(() => this.updateFoodList(this.state.searchString));
  };

  updateFoodList = (searchString) => {
    this.setState({
      searchList: this.state.foodsList.filter((el) =>
        el.name.toLowerCase().startsWith(searchString.toLowerCase())
      ),
    });
  };

  updateShowList = () => {
    return this.state.searchList.length
      ? this.state.searchList
      : this.state.searchString
      ? []
      : this.state.foodsList;
  };

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">IronNutrition</h1>
        <SearchBar
          searchString={this.state.searchString}
          onUpdateSearch={this.updateSearchString}
        />
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
        {this.updateShowList().map((food) => {
          return <FoodBox key={Math.random()} food={food} />;
        })}
      </div>
    );
  }
}

export default App;
