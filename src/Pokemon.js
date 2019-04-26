import React, { Component } from "react";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

export default class Pokemon extends Component {
  state = {
    pokemonStats: []
  };
  capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  componentDidMount = async () => {
    // const tyresponse = await P.getGenerationByName("generation-ii")
    //   .then(function(response) {
    //     let pokemon = response.pokemon_species[0].name;
    const pokemon = await P.getPokemonByName("pikachu"); // with Promise
    if (!pokemon) {
      console.log(`Yo Dog this is what was actually returned ${pokemon}`);
      return;
    }
    this.setState(pokemon);
    this.setState({ pokemonStats: pokemon.stats });
  };
  render() {
    return (
      <div>
        <img
          src={this.state.sprites ? this.state.sprites.front_default : ""}
          alt={this.state.name}
          style={{ height: 20 + "rem" }}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {this.state.types
            ? this.state.types.map((type, i) => {
                return <p key={i}>{this.capitalize(type.type.name)}</p>;
              })
            : null}
        </div>
        <p>{this.state.name ? this.capitalize(this.state.name) : null}</p>
        {this.state.pokemonStats.map((stat, i) => {
          return (
            <p key={i}>
              {stat.stat.name} : {stat.base_stat}
            </p>
          );
        })}
      </div>
    );
  }
}
