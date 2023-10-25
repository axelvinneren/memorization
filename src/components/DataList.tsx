import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Pokemon from "./Pokemon";
import { PokemonsData } from "../PokemonsData";

const DataList = (pokemons: PokemonsData) => {
  const [imagePoke, setImagePoke] = useState<any>()
  useEffect(() => {
    console.log("renderiza DataList");
  }, []);

  const imageMemorized = useMemo(()=> {
    console.log({imagePoke})
    return imagePoke
  }, [imagePoke])

  const showDataUrl = useCallback(async (url: string) => {
    try {
      const result = await fetch(url).then((response) => response.json());
      console.log({ result });
      setImagePoke(result?.sprites?.back_default)
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  return (
    <>
        <ul>
            {pokemons.results !== null && pokemons.results !== undefined
            ? pokemons.results.map((pokemon, index) => (
                <Pokemon key={index} name={pokemon.name} url={pokemon.url} callback={showDataUrl} />
            ))
            : ""}
        </ul>
        {imageMemorized && (<>
            <img src={imageMemorized}/>
        </>)}
    </>
    
  );
};

export default DataList;
