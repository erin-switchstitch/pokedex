// This code brings in code from another file
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import React from "react";
import CaughtPokemon from "./CaughtPokemon";


function logWhenClicked () {
    console.log("CLICKED");
}

function App(){
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon  abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    </div>
  );
}






// This exports the function App so that it can be used in other parts of the code
export default App;
