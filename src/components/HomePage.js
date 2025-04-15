import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <ScrollAnimation />
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Your <span className="highlight">Shield</span> in the Digital{" "}
            <span className="highlight">Realm</span>
          </h1>
          <p className="hero-description">
            At <span className="highlight-text">CyberProtect Solutions</span>,
            we’re your vigilant guardians in the ever-evolving landscape of
            digital threats.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          We’re a passionate team of cyber knights—experts from services,
          industry, compliance, and academia—armed with cutting-edge solutions to
          defend your organization’s data, processes, IT platforms, and brand. Our
          mission is to keep your digital castle safe from dragons, trolls, and
          mischievous imps.
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
    </div>
  );
};

export default HomePage;