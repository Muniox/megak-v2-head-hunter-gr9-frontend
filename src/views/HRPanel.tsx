import React from 'react';

import { Navbar } from '../components/Navbar';
import { SearchInput } from '../components/SearchInput';

import { HrNavbar } from '../components/HrNavbar';
import { Filter } from '../components/Filter';
import { StudentsTable } from '../components/StudentsTable';

export const HRPanel: React.FC = () => (
  <div>
    <Navbar />
    <div className="flex flex-col items-center w-full h-screen bg-primary-color">
      <HrNavbar />
      <div className="flex flex-row items-center justify-between w-4/5 h-14 pl-4 overflow-hidden bg-secondary-color border-b border-primary-border-color">
        <SearchInput />
        <Filter />
      </div>
      <div className="w-4/5">
        <StudentsTable />
        <StudentsTable />
      </div>
    </div>
  </div>
);
