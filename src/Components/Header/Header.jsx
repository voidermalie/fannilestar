import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState, useRef } from 'react';

import LanguageButton from '../LanguageButton/LanguageButton';
import seaAngel from '../../assets/sea_angel.gif';
import fanniAngel from '../../assets/profile_picture.jpg';

const Header = () => {
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
        className='sea-gif'
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
        <LanguageButton />
      </nav>
    </header>
  );
};

export default Header;
