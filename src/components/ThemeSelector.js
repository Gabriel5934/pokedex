import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness2Icon from '@material-ui/icons/Brightness2'

function ThemeSelector(props) {
  function handleThemeChange(event, newTheme) {
    localStorage.setItem('theme', newTheme)
    props.changeTheme(newTheme)
  }

  return (
    <ToggleButtonGroup
      exclusive
      aria-label="Tema"
      value={props.theme}
      onChange={handleThemeChange}
      style={{ margin: '16px' }}
    >
      <ToggleButton value="light" aria-label="Tema claro">
        <Brightness7Icon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Tema escuro">
        <Brightness2Icon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ThemeSelector
