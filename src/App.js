// import logo from './logo.svg';
import React from "react";

import './App.css';
import "./Pokecard.css";

import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <div className="App-Pokedex">
      {Pokedex.map( p => <Pokecard pokemon={p} /> )}
      </div> 
        
    </>
    
  );
}

export default App;
