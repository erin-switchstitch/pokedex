import React from "react";
import { useState } from "react";

// https://reactjs.org/docs/thinking-in-react.html


function CaughtPokemon(props){
  const [caught, setCount] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState([]);

  function handleInputChange(event){
    setPokemonNameInput(event.target.value);
  }

  // const newPokemon = ["Charazard","Meowth", "Squirtle", "Blastoise", "Pontya","Evee","Faleroen","Pideotto","duckly"];
  function changeCounter(){
    // const randomIndex = Math.floor(Math.random() * newPokemon.length);
    if(pokemonNameInput !== ""){
      setCount(caught.concat(pokemonNameInput));
    }
  }

  function resetCounter(){
    setPokemonNameInput("");
  }

  return (
    <div>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <input type="text" onChange={handleInputChange} />
      <button onClick={changeCounter}>Add A Pokemon</button>
      <button onClick={resetCounter}>Reset</button>
      <ul>
        {caught.map(function(element,index){
          return (<li key={index}>{element}</li>);
        })}
      </ul>
    </div>
  );
}

export default CaughtPokemon;