// React
import { useState } from 'react'
import React from 'react'

// Components
import NavBar from '../components/NavBar'
import PokemonDetails from '../components/PokemonDetails'

// Stylesheets
import classes from '../components/styles/PokemonDetails.module.css'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

// Wrapper
import PokeAPI from 'pokeapi-typescript'

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#2E5BA4',
    },
    secondary: {
      main: '#000000',
    },
  },
})

function PokemonPage(props) {
  const [pokemonData, setPokemonData] = useState()
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  function getPokemonDetails() {
    PokeAPI.Pokemon.resolve(window.location.href.split('/').pop())
      .then((response) => {
        setPokemonData({
          sprite: response.sprites.other['official-artwork'].front_default,
          name: response.name,
          weight: response.weight / 10,
          size: response.height / 10,
          types: response.types.map((type) => type.type.name),
          abilities: response.abilities.map((ability) => ability.ability.name),
          stats: response.stats.map((stats) => ({
            name: stats.stat.name,
            value: stats.base_stat,
          })),
        })
      })
      .catch((error) => {
        console.log('Esse Pokémon não existe \n' + error)
      })
  }

  React.useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <ThemeProvider theme={materialTheme}>
      <div
        className={`${theme === 'dark' && classes.darker} ${classes.container}`}
      >
        <NavBar theme={theme} changeTheme={changeTheme} />
        <PokemonDetails pokemonData={pokemonData} theme={theme} />
      </div>
    </ThemeProvider>
  )
}

export default PokemonPage
