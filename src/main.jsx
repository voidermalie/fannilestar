import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
//import { VITE_REACT_APP_GA_TRACKING_ID } from '../.env';

import './index.css';
import AppRouter from './Router/Router.jsx';
import DarkModeProvider from './contexts/DarkModeContext';
import ProjectProvider from './contexts/ProjectContext';
import LanguageProvider from './contexts/LanguageContext';

// Initialize Google Analytics

const trackingID = import.meta.env.VITE_REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(trackingID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <ProjectProvider>
          <AppRouter />
        </ProjectProvider>
      </LanguageProvider>
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
