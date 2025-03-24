import React from "react";
import { Link } from "react-router-dom";
import "../styles/RiskAssessments.css";
import logo from "../assets/logo.jpg";
import riskBackground from "../assets/risk.jpg";

const RiskAssessments = () => {
  return (
    <div className="risk-container" style={{ backgroundImage: `url(${riskBackground})` }}>
      <header className="risk-header">
        <h1>Risk Assessments</h1>
        <p className="animated-text">
          Identifying and mitigating cybersecurity risks effectively.
        </p>
      </header>

      <section className="risk-content">
        <div className="risk-card">
          <h2>🛡 Threat Identification</h2>
          <p>Detecting potential vulnerabilities in your IT infrastructure.</p>
        </div>

        <div className="risk-card">
          <h2>⚡ Vulnerability Analysis</h2>
          <p>Examining weak points to enhance security layers.</p>
        </div>

        <div className="risk-card">
          <h2>🔍 Impact Assessment</h2>
          <p>Evaluating risk severity and potential consequences.</p>
        </div>

        <div className="risk-card">
          <h2>🚀 Action Plan</h2>
          <p>Implementing mitigation strategies for future resilience.</p>
        </div>
      </section>

      {/* Bottom Section with Logo, Text, and Button */}
      <div className="case-study-section">
        <img src={logo} alt="Company Logo" className="case-study-logo" />
        <p className="case-study-text">
          See how organizations mitigate cybersecurity risks with our expert risk assessments.
        </p>
        <Link to="/case-studies" className="case-study-button">
          Read Case Studies
        </Link>
      </div>
    </div>
  );
};

export default RiskAssessments;
