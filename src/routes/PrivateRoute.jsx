import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  }
  return <Navigate to='/login' />;
}

export default PrivateRoute;
