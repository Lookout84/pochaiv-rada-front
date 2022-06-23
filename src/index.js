import React from 'react';
import { createRoot } from 'react-dom/client';
// import { ReactSVG } from 'react-svg';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);