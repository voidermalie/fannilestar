import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './Router/Router.jsx';
import DarkModeProvider from './contexts/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AppRouter />
    </DarkModeProvider>
  </React.StrictMode>
);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
*/
