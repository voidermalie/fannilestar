import './LanguageButton.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageButton = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  const handleLanguageSwitch = () => {
    // Determine the new language based on the current language
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    switchLanguage(newLanguage);
  };

  return (
    <button onClick={handleLanguageSwitch}>
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
};

export default LanguageButton;
