import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pickRandom from './helper';
import './Pokegame.css'

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {

        const pokemons = pickRandom(this.props.pokemon, 4);
        const exp = pokemons.reduce((acc, p) => acc+p.base_experience, 0);

        const pokemons1 = pickRandom(this.props.pokemon, 4);
        const exp1 = pokemons1.reduce((acc, p) => acc+p.base_experience, 0);

        let win = false;
        let win1 = false;
        if(exp1 > exp){
            win1 = true;
        } else {
            win = true;
        }
    return (
        <div className='Pokegame'>
            <Pokedex pokemon={ pokemons } totalExp={ exp } isWinner={ win }/>
            <Pokedex pokemon={ pokemons1 } totalExp={ exp1 } isWinner={ win1 }/>
        </div>
    );
  }
}

export default Pokegame;