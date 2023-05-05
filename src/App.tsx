import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SampleDashboard } from './pages/SampleDashboard';
import { Home } from './components/views/Home/Home';
import { RegistrationLandingPage } from './pages/RegistrationLandingPage';

export const App: FC = () => (
  <div>
    <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
        <Route path="/register" element={<RegistrationLandingPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
