// MaterialUI
import "@fontsource/roboto";
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ConfigBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <TextField
          id="outlined-search"
          label="Nome ou número"
          type="search"
          variant="outlined"
          className={classes.formControl}
          color='secondary'
        />
        <FormControl variant="outlined" className={classes.formControl} color='secondary'>
          <InputLabel>Geração</InputLabel>
          <Select>
            <MenuItem>Todas</MenuItem>
            <MenuItem>I</MenuItem>
            <MenuItem>II</MenuItem>
            <MenuItem>III</MenuItem>
            <MenuItem>IV</MenuItem>
            <MenuItem>V</MenuItem>
            <MenuItem>VI</MenuItem>
            <MenuItem>VII</MenuItem>
            <MenuItem>VIII</MenuItem>
          </Select>
        </FormControl>
        <ToggleButtonGroup exclusive aria-label="Modo de visualização">
          <ToggleButton value="center" aria-label="Visualização normal">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="left" aria-label="Visualização compacta">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup exclusive aria-label="Tema">
          <ToggleButton value="left" aria-label="Tema claro">
            <Brightness7Icon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="Tema escuro">
            <Brightness2Icon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default ConfigBar;
