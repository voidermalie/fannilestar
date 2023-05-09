import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav>
          <Link className="nav" to="/about">
            Bio
          </Link>
          <Link className="nav" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Header