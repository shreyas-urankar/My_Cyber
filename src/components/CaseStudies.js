import React from "react";
import "../styles/CaseStudies.css";
import CaseStudyImage from "../assets/CaseStudy.jpg";
import Navbar from "../components/Navbar";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="case-studies-container">
        <div className="case-studies-content">
          <h2>Case-Studies</h2>
          <p>Study of professional cases</p>
          <button className="cta-button">GET STARTED TODAY</button>
        </div>
        <div className="case-studies-image"></div>
      </div>
    </>
  );
};

export default CaseStudies;
