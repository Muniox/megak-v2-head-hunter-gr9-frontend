import React from 'react';
import { MenuLogo } from '../base/MenuLogo';
import { UserMenu } from '../UserMenu';

export const Header: React.FC = () => {
  return (
    <div className="w-full relative top-0 left-0">
      <div className="sm:flex items-center justify-between bg-primary-border-color py-2 px-28">
        <MenuLogo />
        <UserMenu />
      </div>
    </div>
  );
};
