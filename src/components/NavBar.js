// React
import { Link } from 'react-router-dom'

// Components
import ThemeSelector from './ThemeSelector'

// MaterialUI
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function ConfigBar(props) {
  return (
    <AppBar position="sticky" style={{ marginBottom: '16px' }}>
      <Toolbar>
        <Link to="/">
          <Typography variant="h4" style={{ color: '#fff' }}>
            Pokédex
          </Typography>
        </Link>
        <ThemeSelector theme={props.theme} changeTheme={props.changeTheme} />
      </Toolbar>
    </AppBar>
  )
}

export default ConfigBar
