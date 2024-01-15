import './App.css'
import {useEffect, useState} from "react";
import axios from'axios';
import PokemonCard from "./assets/components/pokemon/PokemonCard.jsx";


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect (() => {
    async function fetchPokemonCard() {
      try {

        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setPokemonList(result.data);
        console.log(result);
      } catch (e) {
        console.error(e);
      }
    }

    fetchPokemonCard();
  }, []);
  return (
    <>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon,index) => (
          <li key={index}>{pokemon.name}</li>
      ))}
      </ul>


    <PokemonCard/>
    </>

  );
}

export default App;
