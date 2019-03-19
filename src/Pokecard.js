import React, { Component } from 'react';
import './Pokecard.css';

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        return (
            <div className='Pokecard'>
                <p>{ this.props.name }</p>
                <img src={ IMG_URL + this.props.id + ".png" } alt={ this.props.name } /><br/>
                <small>Type: { this.props.type }</small><br/>
                <small>EXP: { this.props.base_experience }</small>
            </div>
        );
    }
}

export default Pokecard;