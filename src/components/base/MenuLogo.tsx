import React from 'react';
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export const MenuLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to={routes.home}>
        <img className="py-4 w-20 " src={Logo} alt="logo" />
      </Link>
    </div>
  );
};
