import './DarkModeButton.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggle">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="icon" />
        <div className="background" />
      </label>
    </div>
  );
};

export default DarkModeButton;