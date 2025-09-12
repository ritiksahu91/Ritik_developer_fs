import React, { useState, useEffect } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Layout.css";
import Menus from "../Menus/Menus";
import ThemePanel from "../Theme/ThemePanel";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setToggle(false); // Force collapsed state on mobile
        setMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle toggle for desktop
  const handleToggle = () => {
    if (!isMobile) {
      setToggle(!toggle);
    }
  };

  // Handle mobile menu toggle
  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking overlay
  const handleOverlayClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="sidebar-section">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
            <div className="sidebar-toggle-icons">
              <p onClick={handleToggle}>
                {toggle ? (
                  <AiOutlineDoubleRight size={30} />
                ) : (
                  <AiOutlineDoubleLeft size={30} />
                )}
              </p>
            </div>
            <Menus toggle={toggle} />
          </div>
        )}

        {/* Mobile Sidebar - Always render but conditionally show */}
        <div className="mobile-header" style={{ display: isMobile ? 'flex' : 'none' }}>
          <div className="mobile-menu-toggle" onClick={handleMobileToggle}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <div className="mobile-profile-pic">
            <img src={require("../../assets/images/photo.jpeg")} alt="ritik" />
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div className={`mobile-sidebar ${mobileMenuOpen ? 'mobile-sidebar-open' : ''}`} style={{ display: isMobile ? 'block' : 'none' }}>
          <Menus toggle={true} isMobile={true} />
        </div>

        {/* Mobile Overlay */}
        {mobileMenuOpen && isMobile && (
          <div className="mobile-overlay" onClick={handleOverlayClick}></div>
        )}

        {/* Content Container */}
        <div className={`content-container ${
          isMobile 
            ? 'content-mobile' 
            : toggle 
              ? 'content-expanded' 
              : 'content-collapsed'
        }`}>
          {children}
          <ThemePanel />
        </div>
      </div>
    </>
  );
};

export default Layout;
