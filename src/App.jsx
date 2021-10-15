import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <div>IronNutrition</div>
      <FoodBox foods={foods} />
    </div>
  );
}

export default App;
