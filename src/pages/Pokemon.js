// React
import { useState } from 'react'
import React from 'react'

// Components
import NavBar from '../components/NavBar'
import PokemonDetails from '../components/PokemonDetails'

// // Stylesheets
// import classes from '../components/styles/PokemonDetails.module.css'

// MaterialUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Wrapper
import PokeAPI from 'pokeapi-typescript'

const useStyles = makeStyles((theme) => ({
  darker: {
    backgroundColor: '#121212 !important',
    color: '#fff',
  },
  container: {
    height: '100vh',
  },
}))

function PokemonPage(props) {
  const [pokemonData, setPokemonData] = useState()
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const [notFound, setNotFound] = useState(false)

  const classes = useStyles()

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
        setNotFound(true)
        console.log(error)
      })
  }

  React.useEffect(() => {
    getPokemonDetails()
  }, [])

  return (
    <div
      className={`${theme === 'dark' && classes.darker} ${classes.container}`}
    >
      <NavBar theme={theme} changeTheme={changeTheme} />
      {notFound && <Typography variant="h4">Pokémon não encontrado</Typography>}
      <PokemonDetails pokemonData={pokemonData} theme={theme} />
    </div>
  )
}

export default PokemonPage
