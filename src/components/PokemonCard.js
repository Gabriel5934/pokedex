// React
import { useState } from "react";
import React from "react";

// MaterialUI
import { Typography, Grid, Paper } from "@material-ui/core";

// Axios
import axios from "axios";

function PokemonCard(props) {
  const [pokemons, addPokemon] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0")
      .then((response) => {
        response.data.results.forEach((pokemon) => {
          addPokemon((pokemons) => [
            ...pokemons,
            {
              name: pokemon.name,
              number: pokemon.url
                .split("/")
                .filter((i) => i !== "")
                .pop(),
              official_artwork_url: pokemon.url,
            },
          ]);
        });
      });
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" spacing={6}>
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.name} item>
            <Paper elevation={3}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`}
                alt={pokemon.name}
                style={{
                  width: "340px",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                }}
              >
                {`${pokemon.name} #${pokemon.number}`}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PokemonCard;