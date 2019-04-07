import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';
import themeVariables from './lib/themeVariables';

const MuiThemeVariables: ThemeOptions = {
  direction: 'rtl',
  palette: {
    background: {
      default: themeVariables.backgroundColor,
      paper: themeVariables.paperColor,
    },
    primary: {
      main: themeVariables.colors.primary,
      light: themeVariables.colors.primaryLight,
      dark: themeVariables.colors.primaryDark,
    },
    secondary: {
      main: themeVariables.colors.secondary,
    },
    text: {
      primary: themeVariables.font.primaryColor,
      secondary: themeVariables.font.secondaryColor,
      hint: themeVariables.font.hint,
    },
    common: {
      black: themeVariables.colors.black,
      white: themeVariables.colors.white
    }
  },
  typography: {
    htmlFontSize: themeVariables.font.size,
    fontSize: themeVariables.font.size,
    fontFamily: themeVariables.font.family,
  },
};

const theme = createMuiTheme(MuiThemeVariables);

export default theme;
