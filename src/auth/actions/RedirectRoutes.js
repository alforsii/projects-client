import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function RedirectRoutes(props) {
  const { component: Component, ...rest } = props;
  console.log(
    'Output for: RedirectRoutes -> props.location.pathname',
    props.location.pathname
  );
  return (
    <div>
      <Route
        exact
        path
        render={(props) =>
          props.location.pathname == '/labs/!' ? (
            props.history.goBack()
          ) : (
            <Component {...props} {...rest} />
          )
        }
      />
    </div>
  );
}
