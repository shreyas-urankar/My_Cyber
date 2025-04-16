import React from "react";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cutout from "../assets/CutoutLogo.png";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HomePage = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="homepage">
      <Navbar />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#E0F7FA", // Consistent light cyan background
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 70, // Moderate number for even distribution
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#00BCD4", "#0097A7"], // Cyber-themed colors
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 2,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 800,
              },
              trail: {
                enable: true,
                length: 15,
                fillColor: "#00BCD4",
              },
            },
            links: {
              enable: false, // Avoid mesh effect for even look
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Your <span style={{ color: "#00BCD4" }}>Shield</span> in the Digital{" "}
            <span style={{ color: "#0097A7" }}>Realm</span>
          </h1>
          <p>
            Your trusted defense against digital threats, securing data, IT, and
            brand integrity.
          </p>
          <p className="launching-soon">
            🚀 <strong>Launching Soon</strong>
          </p>
          <img src={Cutout} alt="DigiDefence Cutout Logo" className="hero-logo" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;