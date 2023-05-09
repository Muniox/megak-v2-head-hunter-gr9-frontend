import React from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  type: 'submit' | 'link' | 'button';
  to?: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ type, to, text, className, onClick }) => {
  const baseClasses =
    'transition ease-in-out delay-100 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-btn-color hover:bg-btn-hover-color focus:outline-none focus:ring-2 focus:ring-primary-font-color focus:ring-opacity-50';

  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  switch (type) {
    case 'submit':
      return (
        <button type="submit" className={combinedClasses}>
          {text}
        </button>
      );
    case 'link':
      return (
        <Link to={to || '#'} className={combinedClasses}>
          {text}
        </Link>
      );
    case 'button':
    default:
      return (
        <button type="button" onClick={onClick} className={combinedClasses}>
          {text}
        </button>
      );
  }
};
