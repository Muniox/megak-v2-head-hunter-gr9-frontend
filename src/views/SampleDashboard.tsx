import React from "react";
import {Navbar} from "../components/Navbar";

export const SampleDashboard: React.FC = () => (
  <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center w-full h-screen bg-primary-color">
      <div className="flex flex-col items-center justify-center w-4/5 h-4/5 overflow-hidden bg-secondary-color">
        <h1 className="text-7xl text-primary-font-color">Witaj Kuba</h1>
      </div>
    </div>
  </div>
)
