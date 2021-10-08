import React from "react";


function Logo(props){
    console.log(props);
//   const appName = "Erin's Pokedex";
  return (
    <header>
      <h1>Welcome to the pokedex - {props.appName} </h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgeotto"></img>
    </header>
  );
}

export default Logo;