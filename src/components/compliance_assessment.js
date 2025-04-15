import React from 'react';
// import '../styles/compliance_assessment.css';


const App = () => {
  const handleComplianceClick = (type) => {
    alert(`You selected: ${type}`);
  };


  return (
    <div className="body">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-h1">Compliance Assessments</h1>
          <hr className="hero-hr" />
          <p className="hero-p">Boost Your Compliance Success with Expert Guidance and Support</p>
          <button className="hero-button">Contact Us</button>
        </div>
      </div>


      {/* About Section */}
      <div className="about">
        <div className="about-text">
          <h2 className="red-heading same-heading about-text-h2">
            The Compliance Assessment Expert
          </h2>
          <p className="about-text-p">
            DigiDefense excels in compliance assessments, continuously evaluating your data, platforms, and procedures to
            meet industry and regulatory standards. Our experts conduct pre-assessment planning, gap analysis, and provide
            actionable recommendations to address risks, ensuring compliance with regulations like GDPR, HIPAA, and PCI DSS.
            With a tailored project plan, DigiDefense supports you throughout the compliance process, keeping you aligned
            with best practices.
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://teaching.missouri.edu/sites/default/files/2023-07/AdobeStock_559363198.jpg"
            alt="compliance-assessments"
            className="about-img-img"
          />
        </div>
      </div>


      {/* Cards Section */}
      <section className="DigiDefense-section">
        <h2 className="section-title red-heading same-heading">
          Why Choose DigiDefense for Your Compliance Assessments?
        </h2>
        <p className="section-subtext">
          Compliance requirements can be complex and constantly evolving. DigiDefense simplifies the process with continuous
          assessments of your data, platforms, and procedures, ensuring alignment with standards like PCI DSS and GDPR. We
          assess your controls, identify gaps, and provide a clear path to compliance, helping you avoid penalties. With
          tailored guidance and dedicated support, DigiDefense ensures your compliance journey is seamless and effective.
        </p>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/documents.png"
                alt="icon"
                className="card-icon"
              />
            </div>
            <h3 className="card-title">Stay Informed on Compliance Requirements</h3>
            <p className="card-text">
              We keep you updated on evolving industry standards and regulations, ensuring you’re always aware of compliance
              requirements that impact your organization.
            </p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper">
              <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="icon" className="card-icon" />
            </div>
            <h3 className="card-title">Tailored Customer-Centric Support</h3>
            <p className="card-text">
              We prioritize your unique needs, delivering exceptional support to address your challenges and exceed your
              compliance expectations.
            </p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/play-button-circled.png"
                alt="icon"
                className="card-icon"
              />
            </div>
            <h3 className="card-title">Online Training for Compliance Awareness</h3>
            <p className="card-text">
              We provide online training with up-to-date content on compliance topics, featuring current lessons and data
              breach statistics to educate your team.
            </p>
          </div>
        </div>
      </section>


      {/* Assessing Section */}
      <section className="assessing-section">
        <div className="assessing-content-wrapper">
          <div className="assessing-content">
            <h2 className="assessing-content-h2">Secure Your Future: Uncover Compliance Risks Now!</h2>
            <p className="assessing-content-p">
              Don’t let compliance risks hold your organization back! Our expert assessments at DigiDefence identify
              vulnerabilities, protect your reputation, and ensure you operate responsibly. Take the first step toward a
              secure and compliant future with DigiDefence—start now and safeguard your success!
            </p>
          </div>
          <button className="assessing-button">Get Started</button>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="red-heading same-heading faq-section-h2">
          Top Compliance Assessment FAQs
        </h2>
        <div className="faq-container">
          <div className="faq-card">
            <input type="checkbox" id="faq1" className="faq-toggle" />
            <label htmlFor="faq1" className="faq-question">What is a compliance assessment?</label>
            <div className="faq-answer">
              A compliance assessment is a process of evaluating whether an organization adheres to legal, regulatory, and
              industry standards. It helps identify gaps and ensures that the organization operates in accordance with
              applicable laws and ethical practices.
            </div>
          </div>
          <div className="faq-card">
            <input type="checkbox" id="faq2" className="faq-toggle" />
            <label htmlFor="faq2" className="faq-question">Why is a compliance assessment important?</label>
            <div className="faq-answer">
              Compliance assessments are crucial for reducing legal and reputational risks. They ensure that organizations
              meet regulatory requirements, avoid penalties, and maintain trust with stakeholders by demonstrating a
              commitment to ethical practices.
            </div>
          </div>
          <div className="faq-card">
            <input type="checkbox" id="faq3" className="faq-toggle" />
            <label htmlFor="faq3" className="faq-question">What are the types of compliance assessments?</label>
            <div className="faq-answer">
              <div className="compliance-types">
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('PCI DSS')}
                >
                  PCI DSS
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('GLBA')}
                >
                  GLBA
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('CMMC')}
                >
                  CMMC
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('GDPR')}
                >
                  GDPR
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('HIPAA')}
                >
                  HIPAA
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('ACH')}
                >
                  ACH
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('FERPA')}
                >
                  FERPA
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('FACTA Red Flags')}
                >
                  FACTA Red Flags
                </button>
                <button
                  className="compliance-button"
                  onClick={() => handleComplianceClick('LADMF')}
                >
                  LADMF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default App;

