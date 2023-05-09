import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="nav" to="/" aria-label="Accueil">
          {<FontAwesomeIcon icon={faHouse} />}
        </Link>
        <Link className="nav" to="/about">
          Bio
        </Link>
        <Link className="nav" to="/projects">
          Projects
        </Link>
        <Link className="nav" to="/contact">
          Contact
        </Link>
        <DarkModeButton />
      </nav>
    </header>
  );
};

export default Header;
