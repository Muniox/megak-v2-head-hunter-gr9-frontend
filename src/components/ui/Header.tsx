import React from 'react';
import { MenuLogo } from '../base/MenuLogo';
import { UserMenu } from '../UserMenu';

export const Header: React.FC = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="sm:flex items-center justify-between bg-tertiary-color py-2 px-28 px-7">
        <MenuLogo />
        <UserMenu />
      </div>
    </div>
  );
};
