import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, redirect } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { SampleDashboard } from './pages/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';
import { Navbar } from './components/Navbar';
import { StudentFormPage } from './pages/StudentFormPage';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegistrationLandingPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        loader: () => redirect('/login'),
      },
      {
        path: '/dashboard',
        element: <SampleDashboard />,
      },
      {
        path: '/form',
        element: <StudentFormPage />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
