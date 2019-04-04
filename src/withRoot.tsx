import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';
import RTL from './lib/RTL';
import './lib/WebfontLoader';

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.

    return (
      <RTL>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Router>
            <Component {...props} />
          </Router>
        </ThemeProvider>
      </RTL>
    );
  }

  return WithRoot;
}

export default withRoot;
