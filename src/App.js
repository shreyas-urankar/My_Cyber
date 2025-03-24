import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RiskAssessments from "./components/RiskAssessments";
import CaseStudies from "./components/CaseStudies";
import Advisory from "./components/Advisory";
import GetStarted from "./components/GetStarted";
import AboutUs from "./components/AboutUs";
import TecnologyConsultant from "./components/TechnologyConsultant";
import Blog from "./components/Blog";
import ComplianceAssessment from "./components/ComplianceAssessment";
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/risk-management" element={<RiskAssessments />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/getstarted" element={<GetStarted />} /> 
        <Route path="/technologyconsultant" element={<TecnologyConsultant />} /> 
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/complianceassessment" element={<ComplianceAssessment />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
