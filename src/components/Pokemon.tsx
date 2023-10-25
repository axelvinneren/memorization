import React, { memo, useEffect } from "react";
import { Pokemon } from "../PokemonsData";

const UniquePokemon = memo((poke: Pokemon) => {
    console.log("renderiza pokemon", poke.url);

  useEffect(() => {
    console.log('callback')
  }, [poke?.callback])

  const fetchData = () => {
    if (poke?.callback) {
        console.log('url', poke.url)
        poke?.callback(poke.url)
    }
  }

  return <li onClick={() => fetchData()}>{poke.name}</li>;
});

export default UniquePokemon;
