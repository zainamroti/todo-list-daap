import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  appbar: {
    alignItems: 'center',
  },
  button: {
    color: red,
    position: 'absolute', 
    left: '50%', top: '50%',
  },
  container: {
    styleOverrides: {
      backgroundColor: red,
       margin: '40rem',
       height: '300rem',
       width: '300rem'
    }
  }
});

export default theme;