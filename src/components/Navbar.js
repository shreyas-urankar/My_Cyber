import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo">
        <span>CyberProtect Solutions</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown("services")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="#">
            Services <FaChevronDown className="dropdown-icon" />
          </Link>
          {dropdown === "services" && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/technologyconsultant"
                  onClick={() => setMenuOpen(false)}
                >
                  Technology Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance_assessment"
                  onClick={() => setMenuOpen(false)}
                >
                  Compliance Consulting
                </Link>
              </li>
              <li>
                <Link to="/data-protection" onClick={() => setMenuOpen(false)}>
                  Data Protection
                </Link>
              </li>
              <li>
                <Link to="/risk-management" onClick={() => setMenuOpen(false)}>
                  Risk Management
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <FaBars className="menu-icon" />
      </button>
    </nav>
  );
};

export default Navbar;