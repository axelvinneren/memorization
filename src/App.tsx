import React, { useEffect, useState } from 'react';
import './App.css';
import DataList from './components/DataList';
import { Pokemon, PokemonsData } from './PokemonsData';

/*const Contador = ({count, callbackIncrement}: ContadorProp) => {
  useEffect(() => {
    console.log('nuevo increment')
  }, [callbackIncrement])
  
  return (<>
    <h1>{count}</h1>
    <button onClick={callbackIncrement}>+</button>
  </>)
};*/

const App = () => {
  //const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonsData>();
  const [newPokemon, setNewPokemon] = useState<Pokemon>({name: '', url: ''});

  const getPokemons = async() => {
    try {
      const result = await fetch('https://pokeapi.co/api/v2/pokemon').then(
        (response) => response.json()
      )
      setPokemons(result)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPokemons()
    console.log('renderiza App')
  }, [])
  

  const handleAddPokemon = () => {
    console.log('add pokemon')
    if (pokemons?.results && newPokemon) {
      setPokemons({ results: [...pokemons?.results, newPokemon]})
    }
    
  }
  /*const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])*/
  
  return (
    <div className="main">
      <input type='text' value={newPokemon?.name} onChange={e => setNewPokemon({url: e.target.value, name: e.target.value})} />
      <button onClick={handleAddPokemon}>agrega tu nuevo pokemon</button>
      <DataList results={pokemons?.results} />
      {/*<Contador count={count} callbackIncrement={increment} />*/}
    </div>
  );
}

export default App;
