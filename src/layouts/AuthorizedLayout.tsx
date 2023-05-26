import { Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from '../components/ui';

export const AuthorizedLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start w-full h-screen bg-primary-color ">
        <Outlet />
      </div>
    </>
  );
};
