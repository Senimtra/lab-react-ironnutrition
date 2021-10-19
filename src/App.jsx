import React from 'react';
import './App.scss';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

import foods from './foods.json';
class App extends React.Component {
  state = {
    showAddFoodForm: false,
    foodsList: foods,
    searchList: [],
    searchString: '',
    todaysFood: [],
  };

  toggleAddFoodForm = () => {
    this.setState({
      showAddFoodForm: this.state.showAddFoodForm ? false : true,
    });
  };

  addFood = (food) => {
    Promise.resolve(
      this.setState({
        showAddFoodForm: false,
      })
    ).then(() =>
      this.setState({
        foodsList: [
          ...this.state.foodsList,
          { name: food.name, calories: food.calories, image: food.image },
        ],
      })
    );
  };

  addTodaysFood = (name, calories, amount) => {
    this.setState({
      todaysFood: [...this.state.todaysFood, { name, calories, amount }],
      showAddFoodForm: false,
    });
  };

  updateSearchString = (updatedString) => {
    Promise.resolve(
      this.setState({
        searchString: updatedString,
      })
    ).then(() => this.updateSearchList());
  };

  updateSearchList = () => {
    const search = this.state.searchString;
    this.setState({
      searchList: this.state.foodsList.filter((el) =>
        el.name.toLowerCase().startsWith(search.toLowerCase())
      ),
    });
  };

  updateShowList = () => {
    const { searchList, searchString, foodsList } = this.state;
    return searchString === '' ? foodsList : searchList;
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title is-1">IronNutrition</h1>
          <SearchBar
            searchString={this.state.searchString}
            onUpdateSearch={this.updateSearchString}
          />
          <div id="columns">
            <div>
              <button
                id="add-food-btn"
                className="button is-info"
                onClick={this.toggleAddFoodForm}
              >
                Add new food
              </button>
              {this.state.showAddFoodForm && (
                <AddFood onAddFood={this.addFood} />
              )}
              {/* #################################
                  ##  Iteration 2: Display food  ##
                  ################################# */}
              {this.updateShowList().map((food) => {
                return (
                  <FoodBox
                    key={Math.random()}
                    food={food}
                    onAddTodaysFood={this.addTodaysFood}
                  />
                );
              })}
            </div>
            <TodaysFood todaysList={this.state.todaysFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
