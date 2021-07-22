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
  const [generation, setGeneration] = useState('all')
  const [type, setType] = useState('all')
  const [textQuery, setTextQuery] = useState('')

  function getPokemons(url, filtering) {
    axios.get(url).then((response) => {
      let property =
        response.data.results ||
        response.data.pokemon ||
        response.data.pokemon ||
        response.data.pokemon_species

      property = property.filter((i) => i.name.includes(textQuery))

      property.forEach((pokemon) => {
        addPokemon((pokemons) => [
          ...pokemons,
          {
            name: capitalize(
              pokemon.name ||
                pokemon.pokemon.name ||
                pokemon.pokemon_species.name
            ),
            number: (
              pokemon.url ||
              pokemon.pokemon.url ||
              pokemon.pokemon_species.url
            )
              .split('/')
              .filter((i) => i !== '')
              .pop(),
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
    getPokemons(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    )
  }, [offset])

  function loadMore() {
    setOffset(offset + 48)
  }

  function onSearch() {
    const filters = {
      generation: generation !== 'all' ? generation : false,
      text: textQuery !== '' ? textQuery : false,
    }

    const urls = {
      standard: `https://pokeapi.co/api/v2/pokemon/?limit=48&offset=${offset}`,
      byGeneration: `https://pokeapi.co/api/v2/generation/${generation}`,
    }

    addPokemon([])

    if (filters.generation) {
      getPokemons(urls.byGeneration, true)
    } else if (filters.text) {
      setOffset(0)
      getPokemons(urls.standard, true)
    } else {
      setOffset(0)
      getPokemons(urls.standard)
    }
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <div className={classes.container}>
        <Banner />
        <ConfigBar
          theme={theme}
          changeTheme={changeTheme}
          generation={generation}
          setGeneration={setGeneration}
          type={type}
          setType={setType}
          onSearch={onSearch}
          textQuery={textQuery}
          setTextQuery={setTextQuery}
        />
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
