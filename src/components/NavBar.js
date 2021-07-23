// React
import { Link } from 'react-router-dom'

// Components
import ThemeSelector from './ThemeSelector'

// MaterialUI
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nav_text: {
    color: '#fff',
  },
  gutterBottom: {
    marginBottom: '16px',
  },
}))

function ConfigBar(props) {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.gutterBottom}>
      <Toolbar>
        <Link to="/">
          <Typography variant="h4" className={classes.nav_text}>
            Pokédex
          </Typography>
        </Link>
        <ThemeSelector theme={props.theme} changeTheme={props.changeTheme} />
      </Toolbar>
    </AppBar>
  )
}

export default ConfigBar
