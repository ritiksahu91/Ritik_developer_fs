import React from "react";
import "./Techstack.css";
import { techstacklist } from "../../assets/utilities/techstacklist";

export const Techstack = () => {
  return (
    <>
      <div id="techstack" className="techstack-container neon-3d-card">
        <h2 className="techstack-title">
          Technology Stack
        </h2>
        <hr />
        
        <div className="techstack-grid">
          {techstacklist.map((tech) => (
            <div key={tech._id} className="tech-card">
              <div className="tech-card-content">
                <div className="tech-icon-container">
                  <tech.icon className="tech-icon" style={{ "--brand-color": tech.color || undefined }} />
                </div>
                <div className="tech-name">
                  <h5>{tech.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
