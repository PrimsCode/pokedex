import React from "react";
import "./Pokecard.css";

const Pokecard = ({pokemon}) => {
    return (
            <div className="Pokecard-card">
                <h3 className="Pokecard-title">{pokemon.name}</h3>
                <img className="Pokecard-img" src={pokemon.img}></img>
                <ul className="Pokecard-list">
                    <li>Type: {pokemon.type}</li>
                    <li>EXP: {pokemon.base_experience}</li>
                </ul>
            </div>
    )
}

export default Pokecard;