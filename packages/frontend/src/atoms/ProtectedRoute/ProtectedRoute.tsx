import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ApplicationState } from '../../store/store';

type Props = {
  component: any;
  path: string;
  exact?: any;
};

export const ProtectedRoute = ({component: Component, ...rest}: Props) => {
  const userData = useSelector((state: ApplicationState) => state.auth.userData);

  return <Route {...rest} render={(props) => (userData ? <Component {...props} /> : <Redirect to="/login"/>)}/>;
};
