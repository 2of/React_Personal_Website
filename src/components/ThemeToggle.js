import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/globalcontext'; // Use the global context
import styles from './ThemeToggle.module.css'; // Import the scoped CSS module

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Use global context

  // Update the `data-theme` attribute on the body when `isDarkMode` changes
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-checked={isDarkMode}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        />
        <span className={styles.slider}>
          <FontAwesomeIcon
            icon={faMoon}
            className={`${styles.icon} ${isDarkMode ? '' : styles.hidden}`}
          />
          <FontAwesomeIcon
            icon={faSun}
            className={`${styles.icon} ${isDarkMode ? styles.hidden : ''}`}
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;