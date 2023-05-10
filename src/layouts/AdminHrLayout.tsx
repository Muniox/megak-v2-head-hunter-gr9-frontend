import React, { FC, PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { routes } from '../routes';
import { Navbar } from '../components/ui';

export const AdminHrLayout: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to={routes.login} />;
  const { role } = currentUser;

  return (
    <>
      <Navbar role={role} />
      {children}
    </>
  );
};
