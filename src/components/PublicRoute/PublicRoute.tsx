import { LocationState } from "history";
import * as React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

interface IProps extends RouteComponentProps<LocationState> {
  component: any;
}

export const PublicRouteComponent = ({
  component: Component,
  history,
  ...rest
}: IProps) => {
  const { state } = history.location;
  if (state && state.pathname) {
    return <Redirect to={{ pathname: state.pathname }} />;
  }

  return <Route {...rest} render={(props: any) => <Component {...props} />} />;
};

export const PublicRoute = withRouter(PublicRouteComponent);
