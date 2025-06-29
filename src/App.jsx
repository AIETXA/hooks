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
