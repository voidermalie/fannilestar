import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect, useRef, useContext } from 'react';

import LanguageButton from '../LanguageButton/LanguageButton';
import { LanguageContext } from '../../contexts/LanguageContext';

import seaAngel from '../../assets/sea_angel.gif';

import fanniAngel from '../../assets/profile_picture.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { language } = useContext(LanguageContext);

  // Change image to profile picture on hover
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

  const navItems = [
    { label: language === 'fr' ? 'projets' : 'projects', hash: '#projects' },
    { label: language === 'fr' ? 'compétences' : 'skills', hash: '#skills' },
    {
      ariaLabel: language === 'fr' ? 'Accueil' : 'Home',
      hash: '#top',
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
  ];

  //Hashlink navigation dynamic style if clicked or scrolled 🗡

  const [selectedNavItem, setSelectedNavItem] = useState(-1);

  //Remove dynamic style if scrolled back from navItems
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the top
      if (window.scrollY === 0) {
        setSelectedNavItem(2); // Set the Home as selected
      } else if (window.scrollY >= 500 && window.scrollY < 900) {
        setSelectedNavItem(0);
      } else if (window.scrollY >= 900) {
        setSelectedNavItem(1);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        {navItems.map((navItem, index) => (
          <HashLink
            key={index}
            smooth
            to={navItem.hash}
            aria-label={navItem.ariaLabel}
            className={selectedNavItem === index ? 'selected' : ''}
            onClick={() => {
              setSelectedNavItem(index);
            }}
          >
            {navItem.icon}
            {navItem.label}
          </HashLink>
        ))}
        <LanguageButton />
      </nav>
    </header>
  );
};

export default Header;