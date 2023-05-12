import React from "react";
import { StudentsTable } from "../components/StudentsTable";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { Filter } from "../components/Filter";
import { HrNavbar } from "../components/HrNavbar";

export const HRDashboard: React.FC = () => (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-full h-screen bg-primary-color">
        <HrNavbar/>
        <div
          className="flex items-center justify-between w-4/5 h-14 pl-4 overflow-hidden bg-secondary-color border-b border-primary-border-color">
          <SearchInput />
          <Filter />
        </div>
        <div
          className="flex items-center justify-between w-4/5 bg-secondary-color">
          <div className="w-full">
            <div
              className="flex items-center justify-between px-2">
              <StudentsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
