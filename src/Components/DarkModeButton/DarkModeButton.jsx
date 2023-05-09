import './DarkModeButton.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  //check for browser preferences
  useEffect(() => {
    const isDarkModePreferred =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    // check for previous site preferences
    const storedMode = localStorage.getItem('isDarkMode');
    setIsDarkMode(
      storedMode !== null ? JSON.parse(storedMode) : isDarkModePreferred
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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