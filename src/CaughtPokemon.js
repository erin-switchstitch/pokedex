import React from "react";
import { useState } from "react";

// https://reactjs.org/docs/thinking-in-react.html


function CaughtPokemon(props){
  let [caught, setCount] = useState([]);
  const newPokemon = ["Charazard","Meowth", "Squirtle", "Blastoise", "Pontya","Evee","Faleroen","Pideotto","duckly"];
  function changeCounter(){
    const randomIndex = Math.floor(Math.random() * newPokemon.length);
    setCount(caught.concat(newPokemon[randomIndex]));
  }

  return (
    <div>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <button onClick={changeCounter}>Add A Pokemon</button>
      <ul>
        {caught.map(function(element,index){
          return (<li key={index}>{element}</li>);
        })}
      </ul>
    </div>
  );
}

export default CaughtPokemon;