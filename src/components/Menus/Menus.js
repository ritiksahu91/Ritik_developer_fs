import React from "react";
import { GrUserWorker, GrTechnology, GrProjects } from "react-icons/gr";
import { FaUniversity, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import photo from "../../assets/images/photo.jpeg";
import "./Menus.css";

const Menus = ({ toggle, isMobile = false }) => {
  const navItems = [
    { icon: <FaHome />, text: "Home", id: "home" },
    { icon: <FaInfoCircle />, text: "About", id: "about" },
    { icon: <FaUniversity />, text: "Education", id: "education" },
    { icon: <GrUserWorker />, text: "Work Experience", id: "workexp" },
    { icon: <GrTechnology />, text: "Tech Stack", id: "techstack" },
    { icon: <GrProjects />, text: "Projects", id: "projects" },
    { icon: <MdContacts />, text: "Contact", id: "contact" }
  ];

  const handleNavClick = (id) => {
    // Scroll to section for both mobile and desktop
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isMobile) {
    return (
      <div className="mobile-nav-items">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="mobile-nav-item"
            onClick={() => handleNavClick(item.id)}
          >
            <div className="mobile-nav-link">
              <span className="mobile-nav-icon">{item.icon}</span>
              <span className="mobile-nav-text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={photo} alt="ritik" />
          </div>
          <div className="nav-items">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item">
                <div 
                  className="nav-link"
                  onClick={() => handleNavClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.icon}
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="sidebar-small">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="nav-link collapsed-nav-link" 
                title={item.text}
                onClick={() => handleNavClick(item.id)}
                style={{ cursor: 'pointer' }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
