// MaterialUI
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

  const [generation, setGeneration] = useState('Todas')
  const [viewMode, setViewMode] = useState('normal')
  const [theme, setTheme] = useState('light')

  function changeGeneration(event) {
    setGeneration(event.target.value)
  }

  function changeViewMode(event, newMode) {
    setViewMode(newMode)
  }

  function changeTheme(event, newTheme) {
    setTheme(newTheme)
  }

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <TextField
          id='outlined-search'
          label='Nome ou número'
          type='search'
          variant='outlined'
          className={classes.formControl}
          color='secondary'
        />
        <FormControl
          variant='outlined'
          className={classes.formControl}
          color='secondary'
        >
          <InputLabel id='generation-select-label'>Geração</InputLabel>
          <Select
            labelId='generation-select-label'
            value={generation}
            onChange={changeGeneration}
            label='Geração'
          >
            <MenuItem value='Todas'>Todas</MenuItem>
            <MenuItem value='I'>I</MenuItem>
            <MenuItem value='II'>II</MenuItem>
            <MenuItem value='II'>III</MenuItem>
            <MenuItem value='IV'>IV</MenuItem>
            <MenuItem value='V'>V</MenuItem>
            <MenuItem value='VI'>VI</MenuItem>
            <MenuItem value='VII'>VII</MenuItem>
            <MenuItem value='VIII'>VIII</MenuItem>
          </Select>
        </FormControl>

        <ToggleButtonGroup
          exclusive
          aria-label='Modo de visualização'
          value={viewMode}
          onChange={changeViewMode}
        >
          <ToggleButton value='normal' aria-label='Visualização normal'>
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value='compact' aria-label='Visualização compacta'>
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          exclusive
          aria-label='Tema'
          value={theme}
          onChange={changeTheme}
        >
          <ToggleButton value='light' aria-label='Tema claro'>
            <Brightness7Icon />
          </ToggleButton>
          <ToggleButton value='dark' aria-label='Tema escuro'>
            <Brightness2Icon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default ConfigBar
