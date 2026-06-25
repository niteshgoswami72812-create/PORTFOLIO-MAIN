import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <p className="subtitle">WHAT I DO</p>

        <h2 className="title">Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="icon-box">💻</div>

            <h3>Full Stack Python</h3>

            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Python, Django, Figma</li>
              <li>Backend Development with MySQL</li>
            </ul>
          </div>

          <div className="service-card dark-card">
            <div className="icon-box">{"</>"}</div>

            <h3>Frontend Development</h3>

            <ul>
              <li>Figma</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="icon-box">🗄️</div>

            <h3>Backend & Tools</h3>

            <ul>
              <li>Core Python</li>
              <li>Advanced Python</li>
              <li>MySQL</li>
              <li>Django</li>
              <li>REST API / DRF</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Agile Scrum</li>
            </ul>
          </div>

          <div className="service-card dark-card">
            <div className="icon-box">🤖</div>

            <h3>GenAI Superpower</h3>

            <ul>
              <li>Prompt Engineering</li>
              <li>AI Tools (ChatGPT, Gemini, etc.)</li>
              <li>Automating workflows using AI</li>
              <li>Content generation & smart coding help</li>
              <li>Building AI-powered web apps</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;