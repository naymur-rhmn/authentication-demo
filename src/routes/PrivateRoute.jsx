import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  // console.log(location);

  if (user) {
    return children;
  }
  // state props handling users current location state
  return <Navigate to='/login' state={{ from: location }} />;
}

export default PrivateRoute;
