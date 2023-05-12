import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from './views/LoginPage';
import { SampleDashboard } from './views/SampleDashboard';
import { RegistrationLandingPage } from './components/RegistrationLandingPage';
import { HRDashboard } from './views/HRDashboard';

export const App: FC = () => (

  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
        <Route path="/register" element={<RegistrationLandingPage />} />
        <Route path="/dashboard/hr" element={< HRDashboard/>} />
      </Routes>
    </BrowserRouter>
  </div>
);
