// React
import { useState } from 'react'

// Components
import Banner from '../components/Banner'
import ConfigBar from '../components/ConfigBar'
import PokemonCard from '../components/PokemonCard'
import PokemonCardCompact from '../components/PokemonCardCompact'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

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

function HomePage(props) {
  const [theme, changeTheme] = useState('light')

  return (
    <ThemeProvider theme={materialTheme}>
      <Banner />
      {theme === 'light' && (
        <div className="content-wrapper">
          <ConfigBar theme={theme} changeTheme={changeTheme} />
          <PokemonCard theme={theme} />
        </div>
      )}
      {theme === 'dark' && (
        <div className="content-wrapper dark">
          <ConfigBar theme={theme} changeTheme={changeTheme} />
          <PokemonCard theme={theme} />
        </div>
      )}
    </ThemeProvider>
  )
}

export default HomePage
