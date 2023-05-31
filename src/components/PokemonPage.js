import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
//Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
function PokemonPage({pokemon, setPokemon }) {
const [searchTerm, setSearchTerm] = useState("")

const filteredPokemon = pokemon.filter((pokemon) => (
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}  />
      <br />
      <Search setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
