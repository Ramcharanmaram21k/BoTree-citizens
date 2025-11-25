import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import Router
import App from './App.jsx';
import './index.css';
import './components/i18n.js';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter> {/* 3. Wrap App in BrowserRouter */}
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);