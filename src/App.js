// React
import { Route, Switch } from 'react-router-dom'

// Components
import HomePage from './pages/Home'
import PokemonPage from './pages/Pokemon'
import TypePage from './pages/Type'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/pokemon/:pokemon">
        <PokemonPage />
      </Route>
      <Route path="/tipo/:type">
        <TypePage />
      </Route>
      <Route path="/">
        <div>404</div>
      </Route>
    </Switch>
  )
}

export default App
