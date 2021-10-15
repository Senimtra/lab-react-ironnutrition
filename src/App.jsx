import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <div>IronNutrition</div>

      {/* #################################
          ##  Iteration 2: Display food  ##
          ################################# */}

      {foods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;
