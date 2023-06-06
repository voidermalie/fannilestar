import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './Router/Router.jsx';
import DarkModeProvider from './contexts/DarkModeContext';
import ProjectProvider from './contexts/ProjectContext';
import LanguageProvider from './contexts/LanguageContext';

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
