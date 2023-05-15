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
    <div className="flex flex-col items-center bg-secondary-color w-4/5 h-fit py-1 lg:py-3 mt-48 md:mt-32 lg:mt-28">
      <div className="flex flex-col md:flex-row lg:flex-row w-4/5 items-center lg:items-start md:items-start m-0 p-0 gap-x-2 text-white">
        {linksToDisplay.map((link, index) => (
          <NavLink
            key={index}
            to={link.route}
            className="hover:border-btn-color ease-linear hover:border-b-2 border-t-0 px-7 pb-2 md:pb-3.5 pt-1 md:pt-3 lg:pt-3 text-sm md:text-base text-available-students-details-font-color hover:text-primary-font-color"
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <span className="p-0.5 bg-primary-color w-full" />
    </div>
  );
};
