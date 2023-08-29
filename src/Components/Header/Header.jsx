import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { useState, useRef, useContext } from 'react';

import LanguageButton from '../LanguageButton/LanguageButton';
import { LanguageContext } from '../../contexts/LanguageContext';

import seaAngel from '../../assets/sea_angel.gif';
import fanniAngel from '../../assets/profile_picture.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { language } = useContext(LanguageContext);
  console.log('Header rendering with language:', language);
  
  const [showProfilePicture, setShowProfilePicture] = useState(false);
  const hideProfilePictureTimeout = useRef(null);

  const handleMouseEnter = () => {
    setShowProfilePicture(true);
    clearTimeout(hideProfilePictureTimeout.current);
  };

  const handleMouseLeave = () => {
    hideProfilePictureTimeout.current = setTimeout(() => {
      setShowProfilePicture(false);
    }, 1500);
  };

  return (
    <header id="main-header">
      <img
        src={seaAngel}
        alt="Sea Angel saying hello"
        id="sea-angel"
        className="sea-gif"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: showProfilePicture ? 0 : 1 }}
      />
      {showProfilePicture && (
        <img
          src={fanniAngel}
          alt="Fanni saying hello"
          id="fanni-angel"
          style={{ opacity: showProfilePicture ? 1 : 0 }}
        />
      )}
      <nav>
        <HashLink to="#projects">{ language === 'fr' ? 'projets' : 'projects' }</HashLink>
        <HashLink to="#skills">{ language === 'fr' ? 'compétences' : 'skills' }</HashLink>
        <HashLink to='#home-main' aria-label='Accueil'>{<FontAwesomeIcon icon={faHouse} />}</HashLink>
        <LanguageButton />
      </nav>
    </header>
  );
};

export default Header;
