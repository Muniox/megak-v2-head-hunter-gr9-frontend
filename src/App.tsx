import React, { FC } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { SampleDashboard } from './pages/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';
import { Navbar } from './components/Navbar';

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
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <SampleDashboard />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
