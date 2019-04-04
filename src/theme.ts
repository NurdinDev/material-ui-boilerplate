import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

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
