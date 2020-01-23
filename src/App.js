import React, { useEffect, useState } from 'react';
import Receip from './receip'
import logo from './logo.svg';
import './App.css';

const App = () =>{ 
  const APP_ID = '71e66d5c';
  const APP_KEY = 'b71f7ed97b12c8bdfb793e11f89ed360';
  const [recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setQuery] = useState('chicken');
  //const [counter, setCounter] = useState(0);
  useEffect(() => { // array of value
    getRecipes();
    
  }, [query]);
  const getRecipes = async () => { //make sure code excution
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); //code execution
    const data = await response.json();
    
    setRecipes(data.hits); // hits use for display results
    console.log(data.hits);
  }
  const update = e => { 
    setsearch(e.target.value)
  
  }
  const getsearch = e => { 
    e.preventDefault();
    setQuery(search);
    setsearch('');
  }
  return (
    <div className='App'>
      <form className='search-form' onSubmit={getsearch}>
        <input className='search-bar' type='text' value={search} onChange={update}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Receip title={recipe.recipe.label} Calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}

 </div> 
)
}

export default App;
