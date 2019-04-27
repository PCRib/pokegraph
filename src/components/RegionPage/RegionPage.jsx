import React, { Component } from "react";
const Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();

export default class RegionPage extends Component {
  state = {};
  componentDidMount = async () => {
    const { params } = this.props.match;
    console.log("Type Of :" + typeof params.name);
    const Pokedex = await P.getVersionByName(params.name);
    // let regionUrl = Pokemon.
    // await fetch()
  };
  render() {
    return <div />;
  }
}
