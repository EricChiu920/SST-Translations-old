/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const UnauthenticatedRoute = ({ component: Component, props: componentProps, ...rest }) => {
  const redirect = querystring('redirect');
  return (
    <Route
      {...rest}
      render={props => (!componentProps.isAuthenticated
        ? <Component {...props} {...componentProps} />
        : <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />)}
    />
  );
};

export default UnauthenticatedRoute;
