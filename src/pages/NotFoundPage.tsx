import { Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 24,
  },
  header: {
    color: theme.palette.error.dark,
    marginBottom: 8,
  },
}));

class NotFoundPage extends React.Component<any, any> {
  public render() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={1}>
          404
        </Paper>
      </React.Fragment>
    );
  }
}

export default NotFoundPage;
