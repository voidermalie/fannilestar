import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import seaAngel from '../../assets/sea_angel.gif';

const Header = () => {
  return (
    <header>
      <img src={seaAngel} alt="Sea Angel saying hello" id="sea-angel" />
      <nav>
        <Link className="nav" to="/" aria-label="Accueil">
          {<FontAwesomeIcon icon={faHouse} />}
        </Link>
        <Link className="nav" to="/about">
          Bio
        </Link>
        <HashLink className="nav" to="#projects">
          Projects
        </HashLink>
        <Link className="nav" to="/contact">
          Contact
        </Link>
        <DarkModeButton />
      </nav>
    </header>
  );
};

export default Header;
