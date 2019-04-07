import * as React from 'react';
import { Suspense } from 'react';
import withRoot from './withRoot';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import { routes } from './config/routes';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';

const HomePage = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>يتم التحميل</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
      </Suspense>
    </Layout>
  );
};

export default withRoot(App);
