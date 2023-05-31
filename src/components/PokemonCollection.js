import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const mappedPokemon = pokemon.map((pokemon) => (
   <PokemonCard
   key={pokemon.id}
   name={pokemon.name}
   hp={pokemon.hp}
   image_front={pokemon.sprites.front}
   image_back={pokemon.sprites.back}
   
   />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{mappedPokemon}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
