import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/document/Ritik__Sahu__Resume.pdf";
import profile from "../../assets/document/profile.pdf";
import photo from "../../assets/images/photo.jpeg";

const Home = () => {
  const [twTilt, setTwTilt] = React.useState({ rx: 0, ry: 0 });

  const handleTWMouseMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((midY - y) / midY) * 6;
    const rotateY = ((x - midX) / midX) * 8;
    setTwTilt({ rx: rotateX, ry: rotateY });
    el.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    el.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  };

  const resetTWTilt = () => setTwTilt({ rx: 0, ry: 0 });
  return (
    <>
      <div id="home" className="container-fluid home-container">
        <div className="container home-content">
          <div className="home-row">
            <div className="home-image-section">
              <img src={photo} alt="Ritik Sahu" className="home-profile-image" />
            </div>
            <div className="home-text-section">
              <h1>Hi👋 I'm a</h1>
              <div className="typewriter-scene">
                <h2
                  className="typewriter-3d"
                  onMouseMove={handleTWMouseMove}
                  onMouseLeave={resetTWTilt}
                  style={{ transform: `rotateX(${twTilt.rx}deg) rotateY(${twTilt.ry}deg)` }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "RITIK SAHU",
                        "FULL STACK DEVELOPER",
                        "DATA SCIENTIST",
                        "AI ML ENTHUSIAST",
                        "DSA ENTHUSIAST",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <div className="home-buttons">
                <button className="btn btn-hire">
                  <a href={profile}>Hire me</a>
                </button>
                <button className="btn btn-cv">
                  <a href={resume}>My Resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
