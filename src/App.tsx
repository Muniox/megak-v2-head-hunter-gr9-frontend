import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/views/Home/Home';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
