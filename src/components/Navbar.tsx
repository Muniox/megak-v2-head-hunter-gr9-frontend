import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../assets';

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full relative top-0 left-0">
      <div className="sm:flex items-center justify-between bg-primary-border-color py-2 px-28 px-7">
        <div className="flex items-center justify-center">
          <img className="py-4 w-20 " src={Logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center ">
          <div className="flex">
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-x-1.5 bg-primary-border-color px-3 py-2 text-md text-primary-font-color"
                onClick={() => setToggle(!toggle)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14 text-dropdown-svg-and-search-placeholder-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="w-40 px-6 py-2">John Doe</p>
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </button>
              {toggle && (
                <div className="absolute right-0 z-10 md:mt-3 w-64 origin-top-right bg-primary-border-color py-2">
                  <ul>
                    <li className="block px-6 py-2 text-primary-font-color hover:bg-primary-color hover:text-primary-placeholder-font-color border-b-2 border-divider-line-color">
                      <Link to="/account">Konto</Link>
                    </li>
                    <li className="block px-6 py-2 text-primary-font-color hover:bg-primary-color hover:text-primary-placeholder-font-color">
                      <Link to="/logout">Wyloguj</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
