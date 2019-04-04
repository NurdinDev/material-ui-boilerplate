import * as React from 'react';
import PageRenderer from './lib/PageRenderer';
import { Suspense } from 'react';
import withRoot from './withRoot';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout';

const HomePage = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>يتم التحميل</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageRenderer} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default withRoot(App);
