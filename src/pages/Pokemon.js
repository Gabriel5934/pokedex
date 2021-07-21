// React
import { useState } from 'react'
import React from 'react'

// Components
import ConfigBar from '../components/ConfigBar'
import PokemonDetails from '../components/PokemonDetails'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

// Axios
import axios from 'axios'

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#E54941',
    },
    secondary: {
      main: '#000000',
    },
  },
})

function PokemonPage(props) {
  const [pokemonData, setPokemonData] = useState()

  function getPokemonDetails() {
    console.log('Requesting')
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${
          window.location.href.split('/')[4]
        }`
      )
      .then((response) => {
        setPokemonData({
          sprite: response.data.sprites.other['official-artwork'].front_default,
          name: response.data.name,
          weight: response.data.weight / 10,
          size: response.data.height / 10,
          types: response.data.types.map((type) => type.type.name),
          abilities: response.data.abilities.map(
            (ability) => ability.ability.name
          ),
          stats: response.data.stats.map((stats) => ({
            name: stats.stat.name,
            value: stats.base_stat,
          })),
        })
      })
      .catch((error) => {
        console.log('Esse Pokémon não existe')
      })
  }

  React.useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <ThemeProvider theme={materialTheme}>
      <ConfigBar />
      <PokemonDetails pokemonData={pokemonData} />
    </ThemeProvider>
  )
}

export default PokemonPage
