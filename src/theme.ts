import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

export const themeVariables = {
  backgroundColor: '#f4f4f4',
  drawerWidth: 240,
  container: {
    maxWidth: 1105,
  },
};

const MuiThemeVariables: ThemeOptions = {
  direction: 'rtl',
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#00887b',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: `"Noto Sans Kufi Arabic", Arabesque, "Helvetica", "Arial", sans-serif`,
  },
};

const theme = createMuiTheme(MuiThemeVariables);

export default theme;
