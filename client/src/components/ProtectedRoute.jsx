import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in, redirect to login page
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Logged in but incorrect role, redirect to home
    return <Navigate to="/" replace />;
  }

  // Authorized, render children
  return children;
};

export default ProtectedRoute;
