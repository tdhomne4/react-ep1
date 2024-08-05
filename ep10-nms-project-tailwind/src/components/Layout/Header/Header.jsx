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
    const stickyClass = scrollTop >= 250 ? "sticky top-0 z-max" : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`bg-white border-b-0 pt-5 pb-5 ${sticky}`}>
      <div className="flex items-center">
        <div className="flex-auto">
          <a href="/">
            <img src={Logo} alt="Eatance_Logo" />
          </a>
        </div>
        <div className="header_container_nav">
          {isMenuOpen ? (
            <a className="cursor-pointer bg-none text-4xl" onClick={toggleMenu}>
              ×
            </a>
          ) : (
            <button className="cursor-pointer bg-none text-3xl md:hidden block" onClick={toggleMenu}>
              ☰
            </button>
          )}
          <div className={`header_container_nav_items max-md:absolute max-md:right-[-11px] max-md:w-[200px] max-md:bg-primary max-md:transition-transform max-md:duration-500 max-md:transform max-md:translate-x-[200%] ${isMenuOpen ? "max-md:translate-x-0" : ""}`}>
            <ul className="flex max-md:flex-col">
              <li className="mt-[10px] max-md:mt-5 max-md:flex-auto max-md:w-full max-md:border-b">
                <Link to="/" className="text-black capitalize px-6 pb-5 text-lg font-semibold leading-tight hover:text-custom-green">Home</Link>
              </li>
              <li className="mt-[10px] max-md:mt-5 max-md:flex-auto max-md:w-full max-md:border-b">
                <Link to="/about" className="text-black capitalize px-6 pb-5 text-lg font-semibold leading-tight hover:text-custom-green">About Us</Link>
              </li>
              <li className="mt-[10px] max-md:mt-5 max-md:flex-auto max-md:w-full max-md:border-b">
                <Link to="/contact" className="text-black capitalize px-6 pb-5 text-lg font-semibold leading-tight hover:text-custom-green">Contact Us</Link>
              </li>
              <li className="mt-[10px] max-md:mt-5 max-md:flex-auto max-md:w-full max-md:border-b">
                <Link to="/products" className="text-black capitalize px-6 pb-5 text-lg font-semibold leading-tight hover:text-custom-green">Products</Link>
              </li>
              <li className="mt-[10px] max-md:mt-5 max-md:flex-auto max-md:w-full max-md:border-b">
                <Link to="/grocery" className="text-black capitalize px-6 pb-5 text-lg font-semibold leading-tight hover:text-custom-green">Grocery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
