import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-start w-full h-screen bg-primary-color ">
        <Outlet />
      </div>
    </div>
  );
};
