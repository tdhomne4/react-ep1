import React, { useState,useEffect } from "react";
import HeaderLogo from "../../assets/images/Eatance_Logo.png";
import "./Header.scss";
const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   // on render, set listener
   useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`header ${sticky}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img className="h-logo" src={HeaderLogo} alt="Eatance_Logo" />
          </a>
        </div>
        <div className="nav-container">
          {isMenuOpen ? (
            <a className="close-menu" onClick={toggleMenu}>
              ×
            </a>
          ) : (
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
          )}
          <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
