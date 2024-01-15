
import {useEffect} from "react";
import './PokemonCard.css';


// Ditto
// [afbeelding]
// Moves: 146
// Weight: 55
// Abilities:
// cute-charm
// competitive
// friend-guard
  function PokemonCard() {
  const [pokemon,setPokemon] = useState([]);

  useEffect( () => {
    async function fetchPokemonCard() {
    try {
    const result = await axios.get( 'https://pokeapi.co/api/v2/pokemon/ditto/')
      setPokemon(result);
      console.log(result)
    } catch (e) {
      console.error (e);

    }
       }
       fetchPokemonCard();
  }, []);

 return (
     <>
      <h2>Poki {pokemon.name}</h2>

     </>

   );
}

export default PokemonCard;
  <>
    </>