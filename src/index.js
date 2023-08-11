import React from 'react';
import { createRoot } from 'react-dom/client';
// import { ReactSVG } from 'react-svg';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App analytics={analytics} /> */}
  </React.StrictMode>,
);
