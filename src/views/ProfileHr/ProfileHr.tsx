import { Outlet } from 'react-router-dom';
import React from 'react';
import { AdminHrLayout } from '../../layouts';

export const ProfileHr = () => {
  return (
    <>
      <AdminHrLayout>
        <div className="text-amber-300">Profil HR</div>
        <Outlet />
      </AdminHrLayout>
    </>
  );
};
