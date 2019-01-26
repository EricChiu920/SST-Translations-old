import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, props: componentProps, ...rest }) => (
  <Route
    {...rest}
    render={props => (componentProps.isAuthenticated
      ? <Component {...props} {...componentProps} />
      : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />)
    }
  />
);

export default AuthenticatedRoute;
