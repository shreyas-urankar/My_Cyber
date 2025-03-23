import React, { useState } from "react";
import "./HomePage.css";
import { FaBars, FaLinkedin, FaInstagram, FaFacebook, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import assets
import logo from "./assets/logo.jpg";
import backgroundVideo from "./assets/background.mp4";
import Cutout from "./assets/CutoutLogo.png";

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    return (
        <div className="homepage">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="DigiDefence Logo" />
                    <span>DigiDefence</span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/">Home</Link></li>

                    {/* Services Dropdown */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdown("services")}
                        onMouseLeave={() => setDropdown(null)}
                    >
                        <Link to="#">Services <FaChevronDown className="dropdown-icon" /></Link>
                        {dropdown === "services" && (
                            <ul className="dropdown-menu">
                                <li><Link to="/cybersecurity">Cybersecurity</Link></li>
                                <li><Link to="/compliance">Compliance Consulting</Link></li>
                                <li><Link to="/data-protection">Data Protection</Link></li>
                                <li><Link to="/risk-management">Risk Management</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Products Dropdown */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdown("products")}
                        onMouseLeave={() => setDropdown(null)}
                    >
                        <Link to="#">Products <FaChevronDown className="dropdown-icon" /></Link>
                        {dropdown === "products" && (
                            <ul className="dropdown-menu">
                                <li><Link to="/firewall">AI Firewall</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Resources Dropdown */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdown("resources")}
                        onMouseLeave={() => setDropdown(null)}
                    >
                        <Link to="#">Resources <FaChevronDown className="dropdown-icon" /></Link>
                        {dropdown === "resources" && (
                            <ul className="dropdown-menu">
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/whitepapers">Whitepapers</Link></li>
                                <li><Link to="/case-studies">Case Studies</Link></li> {/* ✅ Fixed Link */}
                            </ul>
                        )}
                    </li>


                    {/* Contact Dropdown */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdown("contact")}
                        onMouseLeave={() => setDropdown(null)}
                    >
                        <Link to="#">Contact <FaChevronDown className="dropdown-icon" /></Link>
                        {dropdown === "contact" && (
                            <ul className="dropdown-menu">
                                <li><Link to="/support">Support</Link></li>
                                <li><Link to="/inquiries">General Inquiries</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </button>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <video className="background-video" autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="overlay"></div>

                <div className="hero-content">
                    <h1>
                        Your <span style={{ color: "blue" }}>Shield</span> in the Digital <span style={{ color: "yellow" }}>Realm</span>
                    </h1>
                    <p>
                        Your trusted defense against digital threats, securing data, IT, and brand integrity.
                    </p>
                    <p className="launching-soon">🚀 <strong>Launching Soon</strong></p>
                    <img src={Cutout} alt="DigiDefence Cutout Logo" className="hero-logo" />
                </div>
            </section>

            {/* Footer */}
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
                    <p className="copyright">&copy; 2025 DigiDefence. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
