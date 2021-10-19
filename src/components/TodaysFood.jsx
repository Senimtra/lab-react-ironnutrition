// #######################################
// ##  Iteration 5: Create add buttons  ##
// #######################################

import React from 'react';

function TodaysFood(props) {
  // console.log(props);
  return (
    <div id="todays-food">
      <div className="title is-4">Today's foods</div>
      <ul>
        {props.todaysList.map((el) => {
          return (
            <li key={Math.random()}>
              {el.amount} {el.name} = {el.calories * el.amount}
            </li>
          );
        })}
      </ul>
      <div>
        Total:{' '}
        {props.todaysList.reduce((sum, el) => sum + el.calories * el.amount, 0)}{' '}
        cal
      </div>
    </div>
  );
}

export default TodaysFood;
