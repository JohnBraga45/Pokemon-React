import React from 'react';
import logoPokemon from '../../assets/logo-pokemon1.png'
import './style.css';

function Navbar() {
    return (
        <div className="Navbar">
            <img src={ logoPokemon } alt='logo pokebola'/>
            <h1>Pokemon </h1>
        </div>
    );
}

export default Navbar;
