import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {  // Palette is not accessible into children of Tree
    primary: {
      // main: '#556cd6',
      main: '#e05297',
    },
    textPrimary: {
      // main: '#556cd6',
      main: '#fceef5',
    },
    secondary: {
      // main: '#19857b',
      main: '#ea86b6',
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: '#fff',
      default: '#f3bad6',
    },
  },
  title: {
    color: '#e05297',
    fontSize: 20,
    textAlign: 'center'
  },
  appbar: {
    alignItems: 'center',
    fontSize: 50
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