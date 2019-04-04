import { Theme } from '@material-ui/core';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import * as React from 'react';
import { themeVariables } from '../../theme';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: '100%',
    padding: 0,
    '@media(min-width: 1130px)': {
      maxWidth: themeVariables.container.maxWidth,
    },
  },
}));

interface IContainerInterface {
  spacing?: GridSpacing;
  customClass?: string;
}

class Container extends React.Component<IContainerInterface | any, object> {
  public render() {
    const classes = useStyles();
    const { children, spacing, customClass } = this.props;
    return (
      <Grid
        container
        className={`${classes.root} ${customClass || ''}`}
        spacing={spacing}>
        {children}
      </Grid>
    );
  }
}

export default Container;
