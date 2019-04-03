import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

// export const themeVariables = {
//   backgroundColor: '#f4f4f4',
// };

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
    fontFamily: '"Noto Sans Kufi Arabic", Arabesque, "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
};

const theme = createMuiTheme(MuiThemeVariables);

export default theme;
