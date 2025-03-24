import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Hide navbar when scrolling down
            } else {
                setShowNavbar(true); // Show navbar when scrolling up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
            <div className="logo">
                <img className="logo-img" src={logo} alt="DigiDefence Logo" />
                <span>DigiDefence</span>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li ><Link to="/">Home</Link></li>
                <li className="dropdown"
                    onMouseEnter={() => setDropdown("services")}
                    onMouseLeave={() => setDropdown(null)}
                >
                    <Link to="#">Services <FaChevronDown className="dropdown-icon" /></Link>
                    {dropdown === "services" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/technologyconsultant">Technology Consultancy</Link></li>
                            <li><Link to="/complianceassessment">Compliance Consulting</Link></li>
                            <li><Link to="/data-protection">Data Protection</Link></li>
                            <li><Link to="/risk-management">Risk Management</Link></li>
                        </ul>
                    )}
                </li>

                <li className="dropdown"
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

                <li className="dropdown"
                    onMouseEnter={() => setDropdown("services")}
                    onMouseLeave={() => setDropdown(null)}
                >
                    <Link to="#">Who we are<FaChevronDown className="dropdown-icon" /></Link>
                    {dropdown === "services" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/digidefencebandits">DigiDefence Bandits</Link></li>
                        </ul>
                    )}
                </li>

                <li className="dropdown"
                    onMouseEnter={() => setDropdown("resources")}
                    onMouseLeave={() => setDropdown(null)}
                >
                    <Link to="#">Resources <FaChevronDown className="dropdown-icon" /></Link>
                    {dropdown === "resources" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/advisory">Advisory</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                        </ul>
                    )}
                </li>

                <li className="dropdown"
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
    );
};

export default Navbar;
