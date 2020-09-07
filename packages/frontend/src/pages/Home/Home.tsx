import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

export const Home: React.FunctionComponent = () => {
  const userData = useSelector((state: ApplicationState) => state.auth.userData);

  return (
    <div>
      <h1>This is the homepage for our application</h1>
      <p>
        {!userData && (
          <span>
            To access the dashboard, please
            {' '}
            <Link to="/login">Log In</Link>
          </span>
        )}
      </p>
    </div>
  );
};
