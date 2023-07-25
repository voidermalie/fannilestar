import './Header.css';
import { Link } from 'react-router-dom';

import LanguageButton from '../LanguageButton/LanguageButton';
import seaAngel from '../../assets/sea_angel.gif';

const Header = () => {

  return (
    <header>
      <Link to="/" aria-label="Accueil" id="sea-angel-link">
      <img src={seaAngel} alt="Sea Angel saying hello" className="sea-gif" />
      </Link>
      <nav>
        <LanguageButton />
      </nav>
    </header>
  );
};

export default Header;