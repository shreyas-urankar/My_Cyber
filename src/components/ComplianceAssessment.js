import React from 'react';
import styles from '../styles/ComplianceAssessment.module.css'; // Import styles correctly

const ComplianceAssessment = () => {
    const handleComplianceClick = (complianceType) => {
        console.log(`Compliance Type Selected: ${complianceType}`);
    };

    return (
        <div className={styles.body}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroH1}>Compliance Assessments</h1>
                    <hr className={styles.heroHr} />
                    <p className={styles.heroP}>Boost Your Compliance Success with Expert Guidance and Support</p>
                    <button className={styles.heroButton}>Contact Us</button>
                </div>
            </div>

            {/* About Section */}
            <div className={styles.about}>
                <div className={styles.aboutText}>
                    <h2 className={`${styles.redHeading} ${styles.sameHeading} ${styles.aboutTextH2}`}>
                        The Compliance Assessment Expert
                    </h2>
                    <p className={styles.aboutTextP}>
                        DigiDefense excels in compliance assessments, continuously evaluating your data, platforms, and procedures to
                        meet industry and regulatory standards. Our experts conduct pre-assessment planning, gap analysis, and provide
                        actionable recommendations to address risks, ensuring compliance with regulations like GDPR, HIPAA, and PCI DSS.
                    </p>
                </div>
                <div className={styles.aboutImg}>
                    <img
                        src="https://teaching.missouri.edu/sites/default/files/2023-07/AdobeStock_559363198.jpg"
                        alt="compliance-assessments"
                        className={styles.aboutImgImg}
                    />
                </div>
            </div>

            {/* Cards Section */}
            <section className={styles.digiDefenseSection}>
                <h2 className={`${styles.sectionTitle} ${styles.redHeading} ${styles.sameHeading}`}>
                    Why Choose DigiDefense for Your Compliance Assessments?
                </h2>
                <p className={styles.sectionSubtext}>
                    Compliance requirements can be complex and constantly evolving. DigiDefense simplifies the process with continuous
                    assessments of your data, platforms, and procedures, ensuring alignment with standards like PCI DSS and GDPR.
                </p>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/documents.png" alt="icon" className={styles.cardIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Stay Informed on Compliance Requirements</h3>
                        <p className={styles.cardText}>
                            We keep you updated on evolving industry standards and regulations, ensuring you’re always aware of compliance
                            requirements that impact your organization.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIconWrapper}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="icon" className={styles.cardIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Tailored Customer-Centric Support</h3>
                        <p className={styles.cardText}>
                            We prioritize your unique needs, delivering exceptional support to address your challenges and exceed your
                            compliance expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Assessing Section */}
            <section className={styles.assessingSection}>
                <div className={styles.assessingContentWrapper}>
                    <div className={styles.assessingContent}>
                        <h2 className={styles.assessingContentH2}>Secure Your Future: Uncover Compliance Risks Now!</h2>
                        <p className={styles.assessingContentP}>
                            Don’t let compliance risks hold your organization back! Our expert assessments at DigiDefence identify
                            vulnerabilities, protect your reputation, and ensure you operate responsibly.
                        </p>
                    </div>
                    <button className={styles.assessingButton}>Get Started</button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <h2 className={`${styles.redHeading} ${styles.sameHeading} ${styles.faqSectionH2}`}>
                    Top Compliance Assessment FAQs
                </h2>
                <div className={styles.faqContainer}>
                    <div className={styles.faqCard}>
                        <input type="checkbox" id="faq1" className={styles.faqToggle} />
                        <label htmlFor="faq1" className={styles.faqQuestion}>What is a compliance assessment?</label>
                        <div className={styles.faqAnswer}>
                            A compliance assessment is a process of evaluating whether an organization adheres to legal, regulatory, and
                            industry standards.
                        </div>
                    </div>
                    <div className={styles.faqCard}>
                        <input type="checkbox" id="faq2" className={styles.faqToggle} />
                        <label htmlFor="faq2" className={styles.faqQuestion}>Why is a compliance assessment important?</label>
                        <div className={styles.faqAnswer}>
                            Compliance assessments are crucial for reducing legal and reputational risks. They ensure that organizations
                            meet regulatory requirements, avoid penalties, and maintain trust with stakeholders.
                        </div>
                    </div>
                    <div className={styles.faqCard}>
                        <input type="checkbox" id="faq3" className={styles.faqToggle} />
                        <label htmlFor="faq3" className={styles.faqQuestion}>What are the types of compliance assessments?</label>
                        <div className={styles.faqAnswer}>
                            <div className={styles.complianceTypes}>
                                {["PCI DSS", "GLBA", "CMMC", "GDPR", "HIPAA", "ACH", "FERPA", "FACTA Red Flags", "LADMF"].map((type) => (
                                    <button key={type} className={styles.complianceButton} onClick={() => handleComplianceClick(type)}>
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComplianceAssessment;
