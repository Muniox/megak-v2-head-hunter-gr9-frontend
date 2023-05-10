import React, { FC } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage } from './views/LoginPage';

import { RegistrationPage } from './views/RegistrationPage';
import { AuthorizedLayout } from './layouts';
import { RequireAuth, routes } from './routes';
import { AddHr } from './views/ProfileAdmin/components/AddHr';
import { AddStudent } from './views/ProfileAdmin/components/AddStudent';

const router = createBrowserRouter([
  {
    path: routes.login,
    element: <LoginPage />,
  },
  {
    path: routes.registration,
    element: <RegistrationPage />,
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
            element: <AddHr />,
          },
          { path: routes.addStudent, element: <AddStudent /> },
          {
            path: routes.availableStudents,
            element: <div className="text-amber-300">Dostępni Kursanci</div>,
          },
          {
            path: routes.toTalk,
            element: <div className="text-amber-300">Do rozmowy</div>,
          },
        ],
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
