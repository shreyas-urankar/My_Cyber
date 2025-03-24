import React from 'react';
import "../styles/AboutUs.css";
import backgroundImage from "../assets/TechnologyServicePageBackground.jpg"; 

const AboutUs = () => {
    return (
        <div className="about-us-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>

            {/* Main Content */}
            <main className="main-section">
                {/* Header */}
                <div className="header-section">
                    <h1 className="main-title">Your Shield in the Digital Realm</h1>
                    <div className="header-line"></div>
                </div>

                {/* Overview Section */}
                <section className="about-overview">
                    <h2>Overview</h2>
                    <div className="content-block">
                        <h3>Who We Are</h3>
                        <p>
                            At CyberProtect Solutions, we're not just another cybersecurity
                            company—we're your vigilant guardians in the ever-evolving
                            landscape of digital threats.
                        </p>
                        <p>
                            We're a passionate team of cyber knights, a crew of experts from
                            services, industry, compliance, and academic fields armed with
                            cutting-edge spells to defend your organization's data, processes,
                            IT platforms, and brand name.
                        </p>
                    </div>

                    <div className="content-block">
                        <h3>What We Offer</h3>
                        <div className="services-list">
                            <div className="service-item">
                                <div className="service-icon compliance-icon"></div>
                                <div className="service-content">
                                    <h4>Compliance Assessments</h4>
                                    <p>Continuous assessments of your data, platforms, and procedures to comply with industry and regulatory requirements.</p>
                                </div>
                            </div>

                            <div className="service-item">
                                <div className="service-icon risk-icon"></div>
                                <div className="service-content">
                                    <h4>Risk Assessments</h4>
                                    <p>Like seasoned fortune tellers, we foresee process gaps and help you fix them.</p>
                                </div>
                            </div>

                            <div className="service-item">
                                <div className="service-icon tech-icon"></div>
                                <div className="service-content">
                                    <h4>Technology Consultancy</h4>
                                    <p>Our experience with the best tools and technologies to suit your requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-block">
                        <h3>Why Choose Us?</h3>
                        <div className="advantages">
                            <div className="advantage-item">
                                <div className="advantage-icon exp-icon"></div>
                                <div className="advantage-content">
                                    <h4>Experience</h4>
                                    <p>Our experts have battled in countless cyber combats.</p>
                                </div>
                            </div>

                            <div className="advantage-item">
                                <div className="advantage-icon custom-icon"></div>
                                <div className="advantage-content">
                                    <h4>Tailored Solutions</h4>
                                    <p>No one-size-fits-all spells here—we customize our protections to fit your unique needs.</p>
                                </div>
                            </div>

                            <div className="advantage-item">
                                <div className="advantage-icon support-icon"></div>
                                <div className="advantage-content">
                                    <h4>24/7 Vigilance</h4>
                                    <p>Round-the-clock service to expedite outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-block">
                        <h3>Join Our Quest</h3>
                        <p>
                            Ready to embark on this epic adventure? Just watch this space and follow us! 🚀
                        </p>
                        <p>
                            Remember, at CyberProtect Solutions, we don't just protect data;
                            we safeguard business plans. Reach out, and let's weave some
                            powerful incantations for your security! 🔐✨
                        </p>
                    </div>

                    <div className="industry-tag">
                        <p>Industry: Technology, Information, and Internet</p>
                    </div>
                </section>

                {/* Quote Section */}
                <div className="quote-section">
                    <blockquote>
                        "Cybersecurity is not a product, but a process of innovation and resilience."
                    </blockquote>
                    <cite>- Henry Solman, Co-Founder</cite>
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <button className="cta-button secondary">Learn More</button>
                </div>

            </main>
        </div>
    );
};

export default AboutUs;
