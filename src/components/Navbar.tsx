import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <div className="flex flex-col items-center bg-secondary-color w-4/5 h-fit py-3 mt-28">
    <div className="flex flex-row w-4/5 items-start justify-start m-0 p-0 gap-x-2 text-white">
      <NavLink
        to="/admin/addstudent"
        className="text-primary-font-color font-medium cursor-pointer mx-1 w-100 hover:bg-right-arrow-svg-color border-b-4 border-secondary-color active:border-b-4 focus:border-login-btn-color"
      >
        Dodaj kursantów
      </NavLink>
      <NavLink
        to="/admin/addhr"
        className="text-primary-font-color font-medium cursor-pointer mx-1 w-100 hover:bg-right-arrow-svg-color border-b-4 border-secondary-color active:border-b-4 focus:border-login-btn-color"
      >
        Dodaj HR
      </NavLink>
    </div>
    <span className="p-0.5 bg-primary-color lg:w-full" />
  </div>
);
