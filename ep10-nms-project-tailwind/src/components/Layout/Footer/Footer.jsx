import React from "react";
import Logo from "../../../../public/assets/images/Eatance_Logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_col_1">
          <div className="footer_col_1_img">
            <Link to="/">
              <img src={Logo} alt="Footer Logo" />
            </Link>
          </div>
          <p className="footer_des"> Turning Restaurants Happy! </p>
        </div>
        <div className="footer_col_2">
          <h2>Multi-Restaurant</h2>
          <div className="footer_col_2_menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_col_3">
          <div className="footer_col_3_social">
            <ul className="social_icons">
              <li>
                <Link to="/"><FaFacebook /></Link></li>
                <li><Link to="/"><FaTwitter /></Link></li>
                <li><Link to="/"><FaInstagram /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
