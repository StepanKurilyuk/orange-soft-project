import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectIf, redirectTo, ...rest}) => (
    <Route {...rest} render={props => (
        redirectIf
            ? <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />
            : <Component {...props} />
    )} />
)