import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../public/assets/images/Eatance_Logo.png";
import style from './style.module.scss';
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
      <div className={`header_container ${style.header_container} `}>
        <div className="header_container_logo">
          <a href="/">
            <img className="header_container_logo_img" src={Logo} alt="Eatance_Logo" />
          </a>
        </div>
        <div className="header_container_nav">
          {isMenuOpen ? (
            <a className="header_container_nav_close_menu" onClick={toggleMenu}>
              ×
            </a>
          ) : (
            <button className="header_container_nav_menu_toggle" onClick={toggleMenu}>
              ☰
            </button>
          )}
          <div className={`header_container_nav_items ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
