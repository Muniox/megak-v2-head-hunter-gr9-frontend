import React, { FC } from 'react';
import { AdminHrLayout } from '../../layouts';
import { Outlet } from 'react-router-dom';

export const ProfileAdmin: FC = () => {
  return (
    <AdminHrLayout>
      <div className="flex flex-col items-center justify-start w-4/5 h-3/5 md:h-3/4 overflow-hidden bg-secondary-color border-t-2 border-tertiary-color">
        <Outlet />
      </div>
    </AdminHrLayout>
  );
};
