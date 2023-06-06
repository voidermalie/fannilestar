import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
const [language, setLanguage] = useState('fr');

const switchLanguage = (lang) => {
    setLanguage(lang);
};

return (
    <LanguageContext.Provider value={{language, switchLanguage}}>
        {children}
    </LanguageContext.Provider>
)
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default LanguageProvider;