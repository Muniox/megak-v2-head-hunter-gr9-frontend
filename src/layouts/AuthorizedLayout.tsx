import { Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from '../components/ui';

export const AuthorizedLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-primary-color text-white">
        <Outlet />
      </div>
    </div>
  );
};
