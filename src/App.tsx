import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { SampleDashboard } from './pages/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';

export const App: FC = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
        <Route path="/register" element={<RegistrationLandingPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
