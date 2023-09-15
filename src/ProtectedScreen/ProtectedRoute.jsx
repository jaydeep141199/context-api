

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated',isAuthenticated)

  return isAuthenticated ? (
    <Outlet/>
  ) : (
    <Navigate to="/signin" replace={true} /> 
  );
};

export default ProtectedRoute;
