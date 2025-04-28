import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
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
            color: { value: "#E0F7FA" },
          },
          fpsLimit: 60,
          particles: {
            number: { value: 70, density: { enable: true, value_area: 800 } },
            color: { value: ["#00BCD4", "#0097A7"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              anim: { enable: true, speed: 2, size_min: 2, sync: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              random: true,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 800 },
              trail: { enable: true, length: 15, fillColor: "#00BCD4" },
            },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <ScrollAnimation />

      {/* Hero Section */}
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
          <p className="launching-soon">🚀 <strong>Launching Soon</strong></p>
          <img src={Cutout} alt="DigiDefence Cutout Logo" className="hero-logo" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          We’re a passionate team of cyber knights—experts from services,
          industry, compliance, and academia—armed with cutting-edge solutions to
          defend your organization’s data, processes, IT platforms, and brand.
        </p>
        <Link to="/aboutus" className="about-button">
          About Us
        </Link>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Compliance Assessments</h3>
            <p>
              Continuous assessments of your data, platforms, and procedures to
              meet industry and regulatory requirements.
            </p>
          </div>
          <div className="service-card">
            <h3>Risk Assessments</h3>
            <p>
              Like seasoned fortune tellers, we identify process gaps and help you
              fortify them.
            </p>
          </div>
          <div className="service-card">
            <h3>Technology Consultancy</h3>
            <p>
              Leveraging best-in-class tools and technologies tailored to your
              unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Join Our Quest</h2>
        <p>
          Ready to embark on this epic adventure? Watch this space and follow us!
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
