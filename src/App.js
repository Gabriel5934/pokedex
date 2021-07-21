// React
import { Route, Switch } from 'react-router-dom'

// Components
import HomePage from './pages/Home'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
