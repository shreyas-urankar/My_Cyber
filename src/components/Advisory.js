import React from "react";
import "../styles/Advisory.css";
import { useNavigate } from "react-router-dom";
import cyberImage from "../assets/Advisory.jpg"; // Ensure the image is in src/assets

const Advisory = () => {
    const navigate = useNavigate();

    const redirectToGetStarted = () => {
        navigate("/getstarted");
    };

    return (
        <section className="advisory">
            <div className="content">
                <h1>Technical Advisory</h1>
                <p>
                    Through sharp, technical, and insightful analysis, the <strong>DigiDefence</strong> team is constantly on the lookout for vulnerabilities and threats. This section exhibits a few of our findings.
                </p>
                <button onClick={redirectToGetStarted}>GET STARTED TODAY</button>
            </div>
            <div className="image-container">
                <img src={cyberImage} alt="Cyber Security Advisory" />
            </div>
        </section>
    );
};

export default Advisory;
