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
import { makeStyles } from '@material-ui/core/styles'

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
    warning: {
      main: '#F7D421',
    },
  },
})

const useStyles = makeStyles((theme) => ({
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

function HomePage(props) {
  const [pokemons, addPokemon] = useState([])
  const [offset, setOffset] = useState(0)
  const [theme, changeTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const [textQuery, setTextQuery] = useState('')
  const [loadMoreBtn, setLoadMoreBtn] = useState(true)

  const classes = useStyles()

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
      setLoadMoreBtn(false)
      limit = 34
    }

    if (textQuery !== '') {
      limit = 898

      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        )
        .then((response) => {
          let property = response.data.results

          property = property.filter(
            (i) =>
              i.name.startsWith(textQuery) ||
              i.url
                .split('/')
                .filter((i) => i !== '')
                .pop()
                .startsWith(textQuery)
          )

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
            setLoadMoreBtn(false)
          })
        })
    } else {
      PokeAPI.Pokemon.list(limit, offset).then((response) => {
        response.results.forEach((pokemon) => {
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
          setLoadMoreBtn(true)
        })
      })
    }
  }, [offset, textQuery])

  function loadMore() {
    setOffset(offset + 48)
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <div className={theme === 'dark' && classes.darker}>
        <Banner />
        <ConfigBar
          theme={theme}
          changeTheme={changeTheme}
          setTextQuery={setTextQuery}
          setOffset={setOffset}
        />
        <div
          className={`${classes.content_wrapper} ${theme === 'dark' && 'dark'}`}
        >
          <PokemonCard
            theme={theme}
            pokemons={pokemons}
            loadMore={loadMore}
            button={loadMoreBtn}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
