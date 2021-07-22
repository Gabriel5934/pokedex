// React
import { useState } from 'react'

// MaterialUI
import {
  AppBar,
  Toolbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness2Icon from '@material-ui/icons/Brightness2'

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

  const [viewMode, setViewMode] = useState('normal')

  function changeGeneration(event) {
    props.setGeneration(event.target.value)
  }

  function changeTextQuery(event) {
    props.setTextQuery(event.target.value)
  }

  function changeViewMode(event, newMode) {
    setViewMode(newMode)
  }

  function handleThemeChange(event, newTheme) {
    localStorage.setItem('theme', newTheme)
    props.changeTheme(newTheme)
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
          value={props.textQuery}
          onChange={changeTextQuery}
        />
        <FormControl
          variant="outlined"
          className={classes.formControl}
          color="secondary"
        >
          <InputLabel id="generation-select-label">Geração</InputLabel>
          <Select
            labelId="generation-select-label"
            value={props.generation}
            onChange={changeGeneration}
            label="Geração"
          >
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="1">I</MenuItem>
            <MenuItem value="2">II</MenuItem>
            <MenuItem value="3">III</MenuItem>
            <MenuItem value="4">IV</MenuItem>
            <MenuItem value="5">V</MenuItem>
            <MenuItem value="6">VI</MenuItem>
            <MenuItem value="7">VII</MenuItem>
            <MenuItem value="8">VIII</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={props.onSearch}>
          BUSCAR
        </Button>

        <ToggleButtonGroup
          exclusive
          aria-label="Modo de visualização"
          value={viewMode}
          onChange={changeViewMode}
        >
          <ToggleButton value="normal" aria-label="Visualização normal">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="compact" aria-label="Visualização compacta">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          exclusive
          aria-label="Tema"
          value={props.theme}
          onChange={handleThemeChange}
        >
          <ToggleButton value="light" aria-label="Tema claro">
            <Brightness7Icon />
          </ToggleButton>
          <ToggleButton value="dark" aria-label="Tema escuro">
            <Brightness2Icon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default ConfigBar
