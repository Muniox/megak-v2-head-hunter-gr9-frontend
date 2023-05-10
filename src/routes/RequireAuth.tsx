import React from 'react';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';
import { routes } from '../routes';
import { UserRole } from '@backendTypes';
import { ProfileAdmin } from '../views/ProfileAdmin';
import { ProfileHr } from '../views/ProfileHr';
import { ProfileStudent } from '../views/ProfileStudent';

export const RequireAuth: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={routes.login} />;
  }

  const { role } = currentUser;

  switch (role) {
    case UserRole.ADMIN:
      return <ProfileAdmin />;
    case UserRole.HR:
      return <ProfileHr />;
    case UserRole.STUDENT:
      return <ProfileStudent />;
    default:
      return <Navigate to={routes.login} />;
  }
};
