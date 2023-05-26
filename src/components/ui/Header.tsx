import React from 'react';
import { MenuLogo } from '../base/MenuLogo';
import { UserMenu } from '../UserMenu';
import { Wrapper } from '../base';

export const Header: React.FC = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-tertiary-color">
      <Wrapper>
        <MenuLogo />
        <UserMenu />
      </Wrapper>
    </div>
  );
};
