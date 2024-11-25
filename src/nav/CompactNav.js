import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo512.png";
import styles from "./CompactNav.module.css";
import ThemeToggle from "../components/ThemeToggle";
import routes from "../routes"; // Import the routes
import Logo from "./Logo";

const CompactNav = ({ navtype, highlightedLink }) => {
  const [hamburger_open, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger_open);
  };

  const NavLinks = () => {
    return (
      <div className={`${styles.navButtonContainer} ${hamburger_open ? styles.open : ""}`}>
        {routes
          .filter(route => route.showInMainNav) // Only include routes with showInMainNav: true
          .map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={`${highlightedLink === route.path ? styles.active : ""} ${styles.navButton} standard_button`}
            >
              {route.displayName}
            </Link>
          ))}
      </div>
    );
  };

  return (
    <div className={`${styles.navContainer} ${styles[navtype]} navContainer standard_cell`}>
      {/* Logo and Title */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>2of.io</h1>
      </div>
    <Logo/>
      {/* Hamburger Button (Only on Mobile) */}
      <button
        className={styles.hamburgerButton}
        onClick={toggleHamburger}
        aria-label="Toggle menu"
      >
        {/* Hamburger icon */}
        <FontAwesomeIcon icon="bars" />
      </button>

      {/* Blurb */}
      <div className={styles.blurb}>
        <p>Hi I'm Noah, This is my lil blog, portfolio, solicitation website ... I make fun stuff. Contact me below if you're interested (or you're hiring!)</p>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialLinksWrapper}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="standard_monochrome_button">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="standard_monochrome_button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="standard_monochrome_button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="standard_monochrome_button">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Spacer Circle Icon */}
        <FontAwesomeIcon icon={faCircle} className={styles.circleDot} aria-hidden="true" />

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Navigation Links */}
      <NavLinks />
    </div>
  );
};

export default CompactNav;