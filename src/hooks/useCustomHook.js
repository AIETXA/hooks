import { useState, useEffect } from 'react';
import App from '../App'

function useCustomHook(urlPokemonl) {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);


useEffect(() => {
    const fetchData = async() => {
    setLoading(true);
    setError(null);
  
    
try {
    const res = await fetch(url)
if(!res.ok) throw new Error(`Error: ${res.status}`);
    const result = await res.json();
    console.log(setData(result));

    } catch (err) {
    setError(err.message);

        } finally {
          setLoading(false);
        }
      };
      fetchData()
}, [url]);

return {data,loading,error};
}


export default useCustomHook


/*DATA  
function FetchState({loading, error, children}) {
  if(loading) return <p>Loading...</p>
  if(error) return <p>Ups, algo salió mal {error.message}</p>
  return children

}

export default FetchState

function Personaje ({titulo, nombre, imagen}) {
  return (
    <>
    <h2>{titulo}</h2>
    <p>{nombre}</p>
    <img src={imagen}  />
    </> 
  )
}

export default Personaje*/