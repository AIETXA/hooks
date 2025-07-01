import useCustomHook from './hooks/useCustomHook'

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const { data, loading, error } = useCustomHook(urlPokemon)

  if(loading) return <p>Cargando...</p>
  if(error) return <p style={{color:'red'}}>{error}</p>;


  //const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  return (
    <>
    <h2>Personaje Pokemon</h2>
    <p>{data.name}</p>
    <img src={data.sprites?.front_default} alt={data.name} />
    </>
  );
}

export default App;

/*DATA
import { useFetchCharacter } from './hooks/useFetchCharacters';
import Personaje from './components/Personaje';
import FetchState from './components/FetchState';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {character: pokemon, isLoading: loadingPokemon, error: errorPokemon} = useFetchCharacter(urlPokemon)
  const {character: rick, isLoading: loadingRick, error: errorRick} = useFetchCharacter(urlRick)
  
  return (
    <>
    <FetchState loading={loadingPokemon} error={errorPokemon}>
      <Personaje 
        titulo="Personaje Pokemon" 
        nombre={pokemon?.name} 
        imagen={pokemon?.sprites.front_default}/> 
    </FetchState>
    <FetchState loading={loadingRick} error={errorRick}>
      <Personaje 
        titulo="Personaje Rick" 
        nombre={rick?.name} 
        imagen={rick?.image}/> 
    </FetchState>
   
    </>
  );
}

export default App; */