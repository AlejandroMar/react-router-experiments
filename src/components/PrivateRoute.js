import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './helpers/auth';

/* const PrivateRoute = ({ component: Component, path, ...rest }) => {
  console.log('rest', rest);
  return <Route path={path} component={Component} />;
};

export default PrivateRoute; */

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  // console.log('rest', rest);
  <Route
    {...rest}
    render={props =>
      // console.log('props: ', props);
      auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { target: props.location },
          }}
        />
      )
    }
  />
);
export default PrivateRoute;
