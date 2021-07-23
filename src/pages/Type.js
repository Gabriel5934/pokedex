// React
import { useState } from 'react'
import React from 'react'

// Components
import PokemonCard from '../components/PokemonCard'
import NavBar from '../components/NavBar'

// MaterialUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Wrapper
import PokeAPI from 'pokeapi-typescript'

const useStyles = makeStyles((theme) => ({
  dark: {
    backgroundColor: '#1f1b24 !important',
    color: '#fff',
  },
  darker: {
    backgroundColor: '#121212 !important',
    color: '#fff',
  },
  content_wrapper: {
    margin: '0 10vw 0 10vw',
  },
}))

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function TypePage(props) {
  const [pokemons, addPokemon] = useState([])
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const classes = useStyles()

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
    <div className={theme === 'dark' && classes.darker}>
      <NavBar theme={theme} changeTheme={changeTheme} />
      <div
        className={`${classes.content_wrapper} ${
          theme === 'dark' && classes.darker
        }`}
      >
        <Typography variant="h4">
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
