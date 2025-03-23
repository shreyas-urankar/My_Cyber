import React from "react";
import "./CaseStudies.css";
import caseStudyImage from "./assets/CaseStudy.jpg"; // Ensure correct path

const CaseStudies = () => {
  return (
    <div className="case-studies-container">
      <div className="case-studies-content">
        <h2>Case-Studies</h2>
        <p>Study of professional cases</p>
        <button className="cta-button">GET STARTED TODAY</button>
      </div>
      <div className="case-studies-image"></div>
    </div>
  );
};

export default CaseStudies;
