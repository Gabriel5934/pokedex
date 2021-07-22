// React
import { useState } from 'react'
import React from 'react'

// Components
import PokemonCard from '../components/PokemonCard'
import NavBar from '../components/NavBar'

// Axios
import axios from 'axios'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function TypePage(props) {
  const [pokemons, addPokemon] = useState([])
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  function getTypePokemons() {
    axios
      .get(
        `https://pokeapi.co/api/v2/type/${window.location.href.split('/')[4]}`
      )
      .then((response) => {
        response.data.pokemon.forEach((pokemon) => {
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
        console.log('Esse tipo não existe')
      })
  }

  React.useEffect(() => {
    getTypePokemons()
  }, [])

  return (
    <div className={theme === 'dark' && 'dark'}>
      <NavBar theme={theme} changeTheme={changeTheme} />
      <div className={`content-wrapper ${theme === 'dark' && 'dark'}`}>
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
