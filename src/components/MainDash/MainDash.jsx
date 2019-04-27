import React, { Component } from "react";
import { Link } from "react-router-dom";
import pokemonRegions from "../../pokemonData/pokemonRegions";
import PokeButton from "../../styledComponents/PokeButton";
const Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();

export default class MainDash extends Component {
  componentDidMount = async () => {
    const region = await P.getPokedexByName("kanto");
  };
  render() {
    return (
      <div
        style={{
          height: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        {pokemonRegions.map(region => {
          return (
            <Link
              to={`/regions/${region.name}`}
              style={{ textDecoration: "none" }}
            >
              <PokeButton>
                <p>{region.name}</p>
              </PokeButton>
            </Link>
          );
        })}
      </div>
    );
  }
}
