import * as React from 'react';
import { Typography } from '@material-ui/core';
import HomePageStyles from './HomePageStyles';

const HomePage = () => {
  const classes = HomePageStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'h5'} gutterBottom>
        متريل ديزاين
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        example project
      </Typography>
    </div>
  );
};

export default HomePage;
