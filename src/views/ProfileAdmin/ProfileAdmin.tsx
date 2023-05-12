import React, { FC } from 'react';
import { AdminHrLayout } from '../../layouts';
import { Outlet } from 'react-router-dom';

export const ProfileAdmin: FC = () => {
  return (
    <AdminHrLayout>
      <Outlet />
    </AdminHrLayout>
  );
};
