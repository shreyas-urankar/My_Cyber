import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import HomePage from "./components/HomePage";
import RiskAssessments from "./components/RiskAssessments";
import CaseStudies from "./components/CaseStudies";
import Advisory from "./components/Advisory";
import GetStarted from "./components/GetStarted";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar added here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/risk-management" element={<RiskAssessments />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/advisory" element={<Advisory />} /> {/* ✅ Advisory Route Added */}
        <Route path="/getstarted" element={<GetStarted />} /> {/* ✅ Get Started Route */}
      </Routes>
    </Router>
  );
};

export default App;
