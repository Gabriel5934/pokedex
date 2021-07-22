// React
import { useRef } from 'react'

// Components
import ThemeSelector from './ThemeSelector'

// MaterialUI
import { AppBar, Toolbar, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function ConfigBar(props) {
  const classes = useStyles()

  const textQueryRef = useRef()

  function handleSearch(event) {
    props.setTextQuery(textQueryRef.current.value)
    props.setOffset(0)
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <TextField
          id="outlined-search"
          label="Nome ou número"
          type="search"
          variant="outlined"
          className={classes.formControl}
          color="secondary"
          defaultValue={''}
          inputRef={textQueryRef}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          BUSCAR
        </Button>
        <ThemeSelector theme={props.theme} changeTheme={props.changeTheme} />
      </Toolbar>
    </AppBar>
  )
}

export default ConfigBar
