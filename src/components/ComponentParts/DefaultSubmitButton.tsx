import React from 'react';

interface Props {
  buttonMessage: string;
  buttonType: 'submit' | 'reset' | 'button' | 'menu';
  onClick?: () => void;
}

export const DefaultSubmitButton = ({ buttonType, buttonMessage, onClick }: Props) =>
  buttonType === 'submit' ? (
    <button
      type="submit"
      className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-login-btn-color"
    >
      {' '}
      {buttonMessage}
    </button>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 text-primary-font-color font-thin text-md py-2 px-4 tracking-wider bg-login-btn-color"
    >
      {buttonMessage}
    </button>
  );
