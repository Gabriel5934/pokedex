// React
import { useState } from 'react'
import React from 'react'

// Components
import Banner from '../components/Banner'
import ConfigBar from '../components/ConfigBar'
import PokemonCard from '../components/PokemonCard'

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
  const [textQuery, setTextQuery] = useState('')

  if (
    !localStorage.getItem('theme') &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    changeTheme('dark')
    localStorage.setItem('theme', 'dark')
  }

  React.useEffect(() => {
    let limit = 48

    if (offset === 0) {
      addPokemon([])
    }

    if (offset >= 864) {
      setEndOfList(true)
      limit = 34
    }

    if (textQuery !== '') {
      limit = 898
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((response) => {
        let property = response.data.results

        if (textQuery !== '') {
          property = property.filter(
            (i) =>
              i.name.startsWith(textQuery) ||
              i.url
                .split('/')
                .filter((i) => i !== '')
                .pop()
                .startsWith(textQuery)
          )
        }

        property.forEach((pokemon) => {
          addPokemon((pokemons) => [
            ...pokemons,
            {
              name: capitalize(pokemon.name),
              number: pokemon.url
                .split('/')
                .filter((i) => i !== '')
                .pop(),
            },
          ])
        })
      })
  }, [offset, textQuery])

  function loadMore() {
    setOffset(offset + 48)
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <div className={theme === 'dark' && 'dark'}>
        <Banner />
        <ConfigBar
          theme={theme}
          changeTheme={changeTheme}
          setTextQuery={setTextQuery}
          setOffset={setOffset}
        />
        <div className={`content-wrapper ${theme === 'dark' && 'dark'}`}>
          <PokemonCard
            theme={theme}
            pokemons={pokemons}
            endOflist={endOflist}
            loadMore={loadMore}
            button={true}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
