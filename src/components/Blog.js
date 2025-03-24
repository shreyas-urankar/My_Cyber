import React from 'react'
import "../styles/Blog.css";
const Blog = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Cyber Security Insights</h1>
        <p>Stay ahead of cyber threats with the latest information and prevention techniques.</p>
      </header>

      <section className="blog-content">
        <article className="blog-post">
          <h2>Understanding Cyber Threats</h2>
          <p>
            Cybersecurity threats are constantly evolving, with attackers using new tactics to exploit vulnerabilities. 
            Here are five of the most common cyber attacks and how you can protect yourself.
          </p>
        </article>

        <article className="blog-post">
          <h2>Common Cyber Attacks & Prevention</h2>

          <div className="attack-section">
            <h3>1. Phishing Attacks</h3>
            <p>
              Phishing is a social engineering attack where attackers trick users into revealing sensitive information, 
              often through fake emails or websites.
            </p>
            <strong>Prevention:</strong> Never click on suspicious links, verify sender identity, and enable multi-factor authentication.
          </div>

          <div className="attack-section">
            <h3>2. Malware Attacks</h3>
            <p>
              Malware, including viruses and ransomware, infects devices to steal or lock data.
            </p>
            <strong>Prevention:</strong> Keep your software updated, use reputable antivirus software, and avoid unknown downloads.
          </div>

          <div className="attack-section">
            <h3>3. SQL Injection</h3>
            <p>
              This attack targets web applications by injecting malicious SQL queries to access databases.
            </p>
            <strong>Prevention:</strong> Use parameterized queries, validate user inputs, and implement strong access controls.
          </div>

          <div className="attack-section">
            <h3>4. Man-in-the-Middle (MITM) Attacks</h3>
            <p>
              Hackers intercept communication between two parties to steal information.
            </p>
            <strong>Prevention:</strong> Always use HTTPS, enable secure VPNs, and avoid using public Wi-Fi for sensitive transactions.
          </div>

          <div className="attack-section">
            <h3>5. Ransomware Attacks</h3>
            <p>
              Ransomware encrypts your files and demands payment to unlock them.
            </p>
            <strong>Prevention:</strong> Regularly back up data, avoid clicking on suspicious email attachments, and keep security software updated.
          </div>
        </article>

        <article className="blog-post">
          <h2>Best Cybersecurity Practices</h2>
          <ul>
            <li>Use strong, unique passwords for each account.</li>
            <li>Enable two-factor authentication (2FA) for added security.</li>
            <li>Regularly update software and operating systems.</li>
            <li>Be cautious when sharing personal information online.</li>
            <li>Monitor your bank statements and accounts for suspicious activity.</li>
            <li>Educate yourself about new cyber threats and how to avoid them.</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Blog
