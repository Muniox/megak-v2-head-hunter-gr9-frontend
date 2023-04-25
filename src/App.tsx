import React, { FC } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Logo } from './assets';

import {LoginPage} from "./views/LoginPage";

export const App: FC = () => (
    <div>
        <h1>
            Hello Group 9 ❤️
            <img src={Logo} alt="BackArrow" />
        </h1>
        <BrowserRouter>
            <Routes>
                < Route path="/login" element={< LoginPage />} />
            </Routes>
        </BrowserRouter>
    </div>
);