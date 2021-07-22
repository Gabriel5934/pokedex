// React
import { useState } from 'react'

// MaterialUI
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
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

  function changeType(event) {
    props.setType(event.target.value)
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
            <MenuItem value="I">I</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="II">III</MenuItem>
            <MenuItem value="IV">IV</MenuItem>
            <MenuItem value="V">V</MenuItem>
            <MenuItem value="VI">VI</MenuItem>
            <MenuItem value="VII">VII</MenuItem>
            <MenuItem value="VIII">VIII</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          color="secondary"
        >
          <InputLabel id="generation-select-label">Tipo</InputLabel>
          <Select
            labelId="generation-select-label"
            value={props.type}
            onChange={changeType}
            label="Geração"
          >
            <MenuItem value="all">Todos</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="fighting">Lutador</MenuItem>
            <MenuItem value="flying">Voador</MenuItem>
            <MenuItem value="poison">Venenoso</MenuItem>
            <MenuItem value="ground">Terra</MenuItem>
            <MenuItem value="rock">Pedra</MenuItem>
            <MenuItem value="bug">Inseto</MenuItem>
            <MenuItem value="ghost">Fantasma</MenuItem>
            <MenuItem value="steel">Metálico</MenuItem>
            <MenuItem value="fire">Fogo</MenuItem>
            <MenuItem value="water">Água</MenuItem>
            <MenuItem value="grass">Planta</MenuItem>
            <MenuItem value="eletric">Elétrico</MenuItem>
            <MenuItem value="psychic">Psíquico</MenuItem>
            <MenuItem value="ice">Gelo</MenuItem>
            <MenuItem value="dragon">Dragão</MenuItem>
            <MenuItem value="dark">Noturno</MenuItem>
            <MenuItem value="fairy">Fada</MenuItem>
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
