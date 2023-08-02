import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    const userLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    // Check if the user's language starts with 'fr'; if not, default to 'en'
    setLanguage(userLanguage.startsWith('fr') ? 'fr' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
