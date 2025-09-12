import React from "react";
import "./Contact.css";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export const Contact = () => {
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((midY - y) / midY) * 8; // max ~8deg
    const rotateY = ((x - midX) / midX) * 12; // max ~12deg
    setTilt({ rx: rotateX, ry: rotateY });

    // pass mouse position to CSS for glow
    const mx = `${(x / rect.width) * 100}%`;
    const my = `${(y / rect.height) * 100}%`;
    card.style.setProperty('--mx', mx);
    card.style.setProperty('--my', my);
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <>
      <div id="contact" className="container contact neon-3d-card">
        <div className="card card0 border-0">
          <div className="contact-card contact-3d-scene">
            <div
              className="card1 contact-details contact-3d-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
            >
              <h3 className="contact-title">Get In Touch</h3>
              <p className="contact-subtitle">I’m open to opportunities, collaborations, and conversations. Reach me via email or connect with me on LinkedIn and GitHub.</p>
              <div className="contact-items">
                <a
                  className="contact-item"
                  href="mailto:ritiksahu91@gmail.com"
                  aria-label="Send email"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <SiGmail style={{ color: "#EA4335" }} />
                  </span>
                  <span className="contact-text">ritiksahu91@gmail.com</span>
                </a>
                <a
                  className="contact-item"
                  href="https://www.linkedin.com/in/ritik-sahu-7aab33238/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open LinkedIn profile"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <SiLinkedin style={{ color: "#0A66C2" }} />
                  </span>
                  <span className="contact-text">linkedin.com/in/ritik-sahu-7aab33238</span>
                </a>
                <a
                  className="contact-item"
                  href="https://github.com/ritiksahu91"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open GitHub profile"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <SiGithub style={{ color: "#181717" }} />
                  </span>
                  <span className="contact-text">github.com/ritiksahu91</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
