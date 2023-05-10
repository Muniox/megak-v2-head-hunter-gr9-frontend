import { Outlet } from 'react-router-dom';
import React from 'react';

export const ProfileStudent = () => {
  return (
    <>
      <div className="text-amber-300">Profil Studenta</div>
      <Outlet />
    </>
  );
};
