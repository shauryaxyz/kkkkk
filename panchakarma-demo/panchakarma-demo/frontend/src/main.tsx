import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found. Make sure index.html has a <div id="root"></div> element.');
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
