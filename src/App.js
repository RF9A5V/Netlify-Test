import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {

  const [drinks, setDrinks] = useState([]);

  function getDrinksOnClick() {
    fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '<MY_SECRET_API_KEY>',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    }).then(response => response.json()).then(data => {
      setDrinks(data.drinks);
    })
  }

  return (
    <div>
      <button onClick={getDrinksOnClick}>Get Drinks</button>
      {
        drinks.map(d => {
          return (
            <div>
              { d.strDrink }
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
