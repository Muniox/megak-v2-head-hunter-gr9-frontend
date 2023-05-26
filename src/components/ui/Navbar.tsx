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
    <div className="flex items-center justify-start w-4/5 h-16 bg-secondary-color  mt-44 py-6">
      {linksToDisplay.map((link, index) => (
        <NavLink
          key={index}
          to={link.route}
          className="ease-linear hover:border-b-2 px-8 pb-3.5 pt-4 text-lg text-secondary-font-color hover:border-btn-color"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};
