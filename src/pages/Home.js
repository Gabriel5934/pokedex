// React
import { useState } from 'react'
import React from 'react'

// Components
import Banner from '../components/Banner'
import ConfigBar from '../components/ConfigBar'
import PokemonCard from '../components/PokemonCard'

// Stylesheets
import classes from '../components/styles/PokemonDetails.module.css'

// Axios
import axios from 'axios'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function HomePage(props) {
  const [pokemons, addPokemon] = useState([])
  const [offset, setOffset] = useState(0)
  const [endOflist, setEndOfList] = useState(false)
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  function getPokemons(offset, limit) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((response) => {
        response.data.results.forEach((pokemon) => {
          addPokemon((pokemons) => [
            ...pokemons,
            {
              name: capitalize(pokemon.name),
              number: pokemon.url
                .split('/')
                .filter((i) => i !== '')
                .pop(),
              official_artwork_url: pokemon.url,
            },
          ])
        })
      })
  }

  React.useEffect(() => {
    let limit
    if (offset >= 864) {
      limit = 34
      setEndOfList(true)
    } else {
      limit = 48
    }
    getPokemons(offset, limit)
  }, [offset])

  function loadMore() {
    setOffset(offset + 48)
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <div className={classes.container}>
        <Banner />
        <ConfigBar theme={theme} changeTheme={changeTheme} />
        {theme === 'light' && (
          <div style={{ width: '100%', heigth: '100%' }}>
            <div className="content-wrapper">
              <PokemonCard
                theme={theme}
                loadMore={loadMore}
                pokemons={pokemons}
                endOflist={endOflist}
              />
            </div>
          </div>
        )}
        {theme === 'dark' && (
          <div
            style={{
              width: '100%',
              heigth: '100%',
              backgroundColor: '#121212',
            }}
          >
            <div className="content-wrapper dark">
              <PokemonCard
                theme={theme}
                loadMore={loadMore}
                pokemons={pokemons}
                endOflist={endOflist}
              />
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export default HomePage
