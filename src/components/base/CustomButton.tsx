import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  type: 'submit' | 'link' | 'button';
  to?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ type, to, children, className, onClick }) => {
  const baseClasses =
    'transition-opacity ease-out duration-300 text-primary-font-color font-normal  py-1.5 px-2.5 tracking-wider bg-btn-color hover:bg-btn-hover-color focus:outline-none focus:ring-2 focus:ring-primary-font-color focus:ring-opacity-50 leading-relaxed';

  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  switch (type) {
    case 'submit':
      return (
        <button type="submit" className={combinedClasses}>
          {children}
        </button>
      );
    case 'link':
      return (
        <Link to={to || '#'} className={combinedClasses}>
          {children}
        </Link>
      );
    case 'button':
    default:
      return (
        <button type="button" onClick={onClick} className={combinedClasses}>
          {children}
        </button>
      );
  }
};
