import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';
import Container from '../layout/partials/Container';
import { scrollTop } from './helpers';
import { routes } from '../config/routes';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 16,
  },
  grow: {
    flexGrow: 1,
  },
}));

const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

type PropsType = {} & RouteComponentProps<any>;

const PageRenderer = (props: PropsType) => {
  useEffect(() => {
    scrollTop();
  }, [props.location.pathname]);

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    };
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container classes={{ root: classes.root }} spacing={32}>
        <Grid item md={12} xs={12}>
          <Switch>
            {routes.map((route, i) => {
              return route.type === 'public' ? (
                <PublicRoute key={i} {...route} />
              ) : route.type === 'private' ? (
                <PrivateRoute key={i} {...route} />
              ) : (
                <Route {...route} key={i} />
              );
            })}
            )}
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(PageRenderer);
