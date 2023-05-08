import React, { FC } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { LoginPage } from './views/LoginPage';
import { SampleDashboard } from './views/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';

import { AddHr } from './views/AddHr';
import { AddStudent } from './views/AddStudent';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { StudentFilter } from './components/StudentFilter';

const Layout = () => (
  <div>
    <Header />
    <div className="flex flex-col items-center justify-start w-full h-screen bg-primary-color ">
      <Navbar />
      <Outlet />
    </div>
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
        path: '/dashboard',
        element: <SampleDashboard />,
      },
      {
        path: '/admin/addhr',
        element: <AddHr />,
      },
      {
        path: '/admin/addstudent',
        element: <AddStudent />,
      },
        path: '/api/hr',
        element: <AddHr />,
      },
      {
        path: '/api/students/import',
        element: <AddStudent />,
      },
      {
        path: '/api/filter',
        element: <StudentFilter />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
