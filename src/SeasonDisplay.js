import React from 'react';
import ReactDOM from 'react-dom';


const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'winter' ? 'Burr, its is chilly' : 'Lets hit the beach';

  console.log(season)
  return(
    <h1>{text}</h1>
  );
};



export default SeasonDisplay;
