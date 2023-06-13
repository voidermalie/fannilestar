import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    // Detect user's language preferences or browser settings
    const userLanguage =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language || navigator.userLanguage;

    // Set the initial language based on user's language preferences
    setLanguage(userLanguage);
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
