import { Outlet } from 'react-router-dom';
import React from 'react';
import { AdminHrLayout } from '../../layouts';

import { SearchInput } from '../../components/SearchInput';
import { Filter } from '../../components/Filter';

export const ProfileHr = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-primary-color">
      <AdminHrLayout>
        <div className="flex items-center justify-between w-4/5 h-14 pl-4 overflow-hidden bg-secondary-color border-b border-primary-border-color">
          <SearchInput />
          <Filter />
        </div>
        <div className="flex items-center justify-between w-4/5 bg-secondary-color">
          <div className="w-full">
            <div className="flex items-center justify-between px-2">
              <Outlet />
            </div>
          </div>
        </div>
      </AdminHrLayout>
    </div>
  );
};
