import React, { useState } from "react";
import "../styles/GetStarted.css";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        interest: "",
        fullName: "",
        organization: "",
        designation: "",
        email: "",
        contact: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted successfully!");
    };

    const closePopup = () => {
        navigate(-1);
    };

    return (
        <div className="popup-container">
            <div className="popup">
                <span className="close-btn" onClick={closePopup}>×</span>
                <h2>Let's make cyberspace secure together!</h2>
                <h3>Requirements</h3>
                <form onSubmit={handleSubmit}>
                    <label>I am Interested in: <span className="required">*</span></label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input type="radio" name="interest" value="Cybersecurity Services" onChange={handleChange} />
                            <span className="custom-radio"></span> Cybersecurity Services
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="interest" value="Cybersecurity Training" onChange={handleChange} />
                            <span className="custom-radio"></span> Cybersecurity Training
                        </label>
                    </div>
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
                    <label>Organization <span className="required">*</span></label>
                    <input type="text" name="organization" placeholder="Organization*" required onChange={handleChange} />
                    <label>Designation <span className="required">*</span></label>
                    <select name="designation" required onChange={handleChange}>
                        <option>Select Designation</option>
                        <option>CEO</option>
                        <option>Manager</option>
                        <option>Security Analyst</option>
                        <option>Other</option>
                    </select>
                    <label>Official Email ID <span className="required">*</span></label>
                    <input type="email" name="email" placeholder="Official Email ID*" required onChange={handleChange} />
                    <label>Contact Number</label>
                    <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div className="testimonial">
                    <h3>What our clients are saying!</h3>
                    <p>
                        <em>Trade Ledger takes privacy and security of its customers and system very seriously. We needed an independent audit to check our systems and wanted to partner with a team that understands the compliance environment of banks.</em>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
