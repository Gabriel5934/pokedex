// React
import { useState } from 'react'
import React from 'react'

// Components
import PokemonCard from '../components/PokemonCard'
import NavBar from '../components/NavBar'

// MaterialUI
import { Typography } from '@material-ui/core'

// Wrapper
import PokeAPI from 'pokeapi-typescript'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function TypePage(props) {
  const [pokemons, addPokemon] = useState([])
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  function getTypePokemons() {
    PokeAPI.Type.resolve(window.location.href.split('/').pop())
      .then((response) => {
        response.pokemon.forEach((pokemon) => {
          addPokemon((pokemons) => [
            ...pokemons,
            {
              name: capitalize(pokemon.pokemon.name),
              number: pokemon.pokemon.url
                .split('/')
                .filter((i) => i !== '')
                .pop(),
            },
          ])
        })
      })
      .catch((error) => {
        console.log('Esse tipo não existe' + error)
      })
  }

  React.useEffect(() => {
    getTypePokemons()
  }, [])

  return (
    <div className={theme === 'dark' && 'dark'}>
      <NavBar theme={theme} changeTheme={changeTheme} />
      <div className={`content-wrapper ${theme === 'dark' && 'dark'}`}>
        <Typography variant="h4" className={theme === 'dark' && 'dark'}>
          {capitalize(window.location.href.split('/').pop())}
        </Typography>
        <PokemonCard
          pokemons={pokemons}
          theme={theme}
          changeTheme={changeTheme}
        />
      </div>
    </div>
  )
}

export default TypePage
