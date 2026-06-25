import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";

function Work() {
  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-header">
        <div>
          <p className="portfolio-subtitle">PORTFOLIO</p>
          <h2 className="portfolio-title">Projects</h2>     
        </div>

        <Link to="/projects" className="project-btn">
          All Projects →
        </Link>
      </div>

      <div className="portfolio-grid">
        <div className="project-card border-card">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
            alt="Portfolio"
          />

          <div className="project-content">
            <div className="tags">
              <span>Portfolio</span>
              <span>React JS</span>
            </div>

            <h3>Personal Portfolio</h3>

            <p>
              Modern responsive portfolio website built using React JS, CSS
              and smooth UI animations with professional design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;