import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import seaAngel from '../../assets/sea_angel.gif';

const Header = () => {

  return (
    <header>
      <Link to="/" aria-label="Accueil" id="sea-angel-link">
      <img src={seaAngel} alt="Sea Angel saying hello" id="sea-angel" />
      </Link>
      <nav>
        <Link className="nav" to="/" aria-label="Accueil">
          {<FontAwesomeIcon icon={faHouse} />}
        </Link>
        <DarkModeButton />
      </nav>
    </header>
  );
};

export default Header;