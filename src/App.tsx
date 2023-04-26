import React, { FC } from 'react';
import { Logo } from './assets';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';

export const App: FC = () => (
  <h1>
    Hello Group 9 ❤️
    <img src={Logo} alt="BackArrow" />
    <RegistrationLandingPage />
  </h1>
);
