import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { SecondDefaultComponent } from './components/SecondDefaultComponent';
import './index.postcss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* SecondDefaultComponent created for testing shared types */}
    <SecondDefaultComponent />
    <App />
  </React.StrictMode>,
);
