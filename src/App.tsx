import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from './views/LoginPage';
import { SampleDashboard } from './views/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';
import { Home } from './components/views/Home/Home';

export const App: FC = () => (
  <div>
    <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
        <Route path="/register" element={<RegistrationLandingPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
