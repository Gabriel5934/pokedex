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
      <Route path="/pokemon/:pokemon">
        <div>Hi!</div>
      </Route>
      <Route path="/">
        <div>404</div>
      </Route>
    </Switch>
  )
}

export default App
