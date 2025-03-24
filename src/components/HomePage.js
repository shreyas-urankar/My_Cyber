import React, { useState } from "react";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";

// Import assets
import backgroundVideo from "../assets/background.mp4";
import Cutout from "../assets/CutoutLogo.png";

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    return (
        <div className="homepage">
            <Navbar/>
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
        </div>
    );
};

export default HomePage;
