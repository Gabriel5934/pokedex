// Components
import Banner from './components/Banner'
import ConfigBar from './components/ConfigBar'
import PokemonCard from './components/PokemonCard'
import PokemonCardCompact from './components/PokemonCardCompact'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

// React
import { Route, Switch } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E54941',
    },
    secondary: {
      main: '#000000',
    },
  },
})

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <ThemeProvider theme={theme}>
          <Banner />
          <div className="content-wrapper">
            <ConfigBar />
            <PokemonCard />
          </div>
        </ThemeProvider>
      </Route>
    </Switch>
  )
}

export default App
