import React, { FC } from 'react';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Login } from './views/Login';

import { Registration } from './views/Registration';
import { AuthorizedLayout } from './layouts';
import { ProtectedRoute, RequireAuth, routes } from './routes';
import { AddHr } from './views/ProfileAdmin/components/AddHr';
import { AddStudents } from './views/ProfileAdmin/components/AddStudents';
import { UserRole } from '@backendTypes';
import { AvailableStudents } from './views/ProfileHr/components/AvailableStudents';
import { ToTalk } from './views/ProfileHr/components/ToTalk';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Navigate to={routes.login} />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.registration,
    element: <Registration />,
  },
  {
    path: routes.hrTalk,
    element: <AvailableStudents />,
  },
  {
    path: '/activation',
    element: <Navigate to={routes.registration} />,
  },
  {
    path: routes.dashboard,
    element: <AuthorizedLayout />,
    children: [
      {
        path: routes.dashboard,
        element: <RequireAuth />,
        children: [
          {
            path: routes.addHr,
            element: <ProtectedRoute element={<AddHr />} requiredRole={UserRole.ADMIN} />,
          },
          {
            path: routes.addStudents,
            element: <ProtectedRoute element={<AddStudents />} requiredRole={UserRole.ADMIN} />,
          },
          {
            path: routes.availableStudents,
            element: <ProtectedRoute element={<AvailableStudents />} requiredRole={UserRole.HR} />,
          },
          {
            path: routes.toTalk,
            element: <ProtectedRoute element={<ToTalk />} requiredRole={UserRole.HR} />,
          },
        ],
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
