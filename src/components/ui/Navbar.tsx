import { UserRole } from '@backendTypes';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { translations } from '../../utlils/translations';

interface Props {
  role: UserRole;
}
export const Navbar: React.FC<Props> = ({ role }) => {
  const hrLinks = [
    {
      route: routes.availableStudents,
      text: translations.navbar.links.availableStudents,
    },
    {
      route: routes.toTalk,
      text: translations.navbar.links.toTalk,
    },
  ];

  const adminLinks = [
    {
      route: routes.addStudents,
      text: translations.navbar.links.addStudents,
    },
    {
      route: routes.addHr,
      text: translations.navbar.links.addHr,
    },
  ];

  const linksToDisplay = role === UserRole.ADMIN ? adminLinks : hrLinks;

  return (
    <div className="flex flex-col items-center bg-secondary-color w-4/5 h-fit py-3 mt-28">
      <div className="flex flex-row w-4/5 items-start justify-start m-0 p-0 gap-x-2 text-white">
        {linksToDisplay.map((link, index) => (
          <NavLink
            key={index}
            to={link.route}
            className="text-primary-font-color font-medium cursor-pointer mx-1 w-100 hover:bg-right-arrow-svg-color border-b-4 border-secondary-color active:border-b-4 focus:border-login-btn-color"
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <span className="p-0.5 bg-primary-color lg:w-full" />
    </div>
  );
};
