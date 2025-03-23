import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RiskAssessments from "./RiskAssessments";
import CaseStudies from "./CaseStudies"; // ✅ Import CaseStudies Component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/risk-management" element={<RiskAssessments />} />
        <Route path="/case-studies" element={<CaseStudies />} /> {/* ✅ Added Route for Case Studies */}
      </Routes>
    </Router>
  );
};

export default App;
