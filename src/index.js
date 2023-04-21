import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes';
import { EstacionesProvider } from './Context/EstacionesContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EstacionesProvider>
      <Routes />
    </EstacionesProvider>
  </React.StrictMode>
);