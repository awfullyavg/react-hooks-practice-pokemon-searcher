import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((resp) => resp.json())
    .then(data => setPokemon(data))
  }, [])

const [isPokemon, setPokemon] = useState([])




  return (
    <div className="App">
      <PokemonPage pokemon={isPokemon} setPokemon={setPokemon} />
    </div>
  );
}

export default App;
