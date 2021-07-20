// Components
import Banner from './components/Banner'
import ConfigBar from './components/ConfigBar'

// MaterialUI
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E54941',
    },
    secondary: {
      main: '#424242',
    }
  },
});

function App() {
  return ( <ThemeProvider theme={theme}>
    <Banner/>
    <div className='content-wrapper'>
      <ConfigBar/>
    </div>
  </ThemeProvider>
  );
}

export default App;
