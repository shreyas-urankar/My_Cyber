import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3>DigiDefence</h3>
        <p>Protecting your digital world, ensuring security and trust.</p>
        <div className="social-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
        </div>
        <Link to="/contact" className="contact-button">Contact Us</Link>
        <p className="copyright">© 2025 DigiDefence. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;