import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Nitesh" />
        </div>

        <div className="about-content">
          <p className="about-subtitle">ABOUT ME</p>

          <h2>
            A bit about <br />
            who I am
          </h2>

          <p className="about-text">
            Hi, I'm <strong>Nitesh</strong>, a passionate Full Stack Python
            Developer who enjoys building modern web applications and solving
            real-world problems through technology.
          </p>

          <p className="about-text">
            My expertise includes frontend development with React JS and backend
            development using Python, Django, REST API and MySQL. I focus on
            creating responsive, user-friendly and scalable applications with
            clean code and modern design principles.
          </p>

          <div className="skills">
            <h4>STACK & TOOLS</h4>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React JS</span>
              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>DRF</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Agile Scrum</span>
              <span>Figma</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;