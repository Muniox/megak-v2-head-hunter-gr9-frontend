import { UserRole } from '@backendTypes';
import React from 'react';
import { useAuth } from '../context/authContext';
import { routes } from './routes';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: React.ReactElement;
  requiredRole: UserRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, requiredRole }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={routes.login} />;
  }

  if (currentUser.role !== requiredRole) {
    return <Navigate to={routes.dashboard} />;
  }

  return element;
};
