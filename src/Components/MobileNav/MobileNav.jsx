import './MobileNav.css';
import { useState, useContext } from 'react';

import mobileNavIcon from '../../assets/icons/menu.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import LanguageButton from '../LanguageButton/LanguageButton';
import { HashLink } from 'react-router-hash-link';

const MobileNav = () => {
    const { language } = useContext(LanguageContext);

    const toggleButtonAlt =
        language === 'fr' ? 'Ouvrir la navigation' : 'Toggle navigation';
    const toggleIconAlt =
        language === 'fr' ? 'Icône de navigation mobile' : 'Mobile menu icon';

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="mobile-nav">
            <button
                className="mobile-nav-toggle-btn"
                aria-label={toggleButtonAlt}
                onClick={toggleVisibility}
            >
                <img
                    className="mobile-nav-toggle-icon"
                    src={mobileNavIcon}
                    alt={toggleIconAlt}
                />
            </button>
            {isVisible && (
                <nav>
                    <HashLink smooth to="#projects">
                        {language === 'fr' ? 'projets' : 'projects'}
                    </HashLink>
                    <HashLink smooth to="#skills">
                        {language === 'fr' ? 'compétences' : 'skills'}
                    </HashLink>
                    <HashLink smooth to="#top" aria-label="Accueil">
                        {<FontAwesomeIcon icon={faHouse} />}
                    </HashLink>
                    <LanguageButton />
                </nav>
            )}
        </div>
    );
};

export default MobileNav;
