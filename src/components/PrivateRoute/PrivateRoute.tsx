import { LocationState } from "history";
import * as React from "react";
import {
  Route,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

interface IProps extends RouteComponentProps<LocationState> {
  component: any;
}

export const PrivateRouteComponent = ({
  component: Component,
  history,
  ...rest
}: IProps) => {
  return (
    <Route
      {...rest}
      render={
        props => (
          // userContext.user.userId ? (
          <Component {...props} />
        )
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: '/login',
        //       state: {
        //         pathname: history.location.pathname,
        //       },
        //     }}
        //   />
        // )
      }
    />
  );
};

export const PrivateRoute = withRouter(PrivateRouteComponent);
