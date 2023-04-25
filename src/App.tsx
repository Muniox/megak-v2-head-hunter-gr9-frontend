import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {BrowserRouter, Route, Routes } from "react-router-dom";

import {LoginPage} from "./components/LoginPage";

export const App = () => (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )