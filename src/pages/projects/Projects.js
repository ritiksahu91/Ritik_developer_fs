import React from "react";
import "./projects.css";
import ecommercephoto from "../../assets/images/eccomerce.jpeg";
import plantimg from "../../assets/images/plandiseas.jpeg";
import qrcodeimg from "../../assets/images/Qrcode.png";
import snakeimg from "../../assets/images/snake.jpeg";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="projects-container neon-3d-card">
        <h2 className="projects-title">
          my recent projects
        </h2>
        <hr />
        
        <div className="projects-grid">
          {/* Project Card 1 */}
          <div className="project-card">
            <div className="card-image-container">
              <span className="card-badge">Full Stack</span>
              <img src={ecommercephoto} alt="RS Shopping Website" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h5>RS Shopping Website</h5>
              </div>
              <div className="card-tech-stack">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">PHP</span>
                <span className="tech-badge">SQL</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="card-actions">
                <a
                  href="https://github.com/ritiksahu91/cart-management-website"
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="project-card">
            <div className="card-image-container">
              <span className="card-badge">Full Stack</span>
              <img src={plantimg} alt="Plant Disease Detection App" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h5>Plant Disease Detection App</h5>
              </div>
              <div className="card-tech-stack">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Flask</span>
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="card-actions">
                <a
                  href="https://github.com/ritiksahu91/plant_disease_detection_webapp"
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="project-card">
            <div className="card-image-container">
              <span className="card-badge">Full Stack</span>
              <img src={qrcodeimg} alt="QR Code Generator" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h5>QR Code Generator</h5>
              </div>
              <div className="card-tech-stack">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">HTML/CSS</span>
                <span className="tech-badge">SQL</span>
                <span className="tech-badge">Figma</span>
              </div>
              <div className="card-actions">
                <a
                  href="https://github.com/ritiksahu91/QRlink-it"
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="project-card">
            <div className="card-image-container">
              <span className="card-badge">Game</span>
              <img src={snakeimg} alt="Snake Game" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h5>Snake Game</h5>
              </div>
              <div className="card-tech-stack">
                <span className="tech-badge">C++</span>
              </div>
              <div className="card-actions">
                <a
                  href="https://github.com/ritiksahu91/snake-game"
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
