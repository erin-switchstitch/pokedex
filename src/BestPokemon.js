import React from "react";

function BestPokemon(props){
console.log(props);
  return(
    <div>
      <p>My favorite pokemon is Evee !!!</p>
      <ul>
        {props.abilities.map(function(element,index){
          console.log(element);
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default BestPokemon;