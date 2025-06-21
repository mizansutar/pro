import React from 'react';
import './footer.css';

const Footer = ({ isMoon }) => {
  return (
    <footer className={`portfolio-footer ${isMoon ? 'moon' : 'sun'}`}>
      <div className="footer-inner">
        <h2 className="footer-title">Nicky • Developer</h2>
        <p className="footer-subtitle">Dreaming beyond infinity. ONAC ✨</p>
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Nicky. All rights reserved.</p>
      </div>
      <div className="footer-glow" />
    </footer>
  );
};

export default Footer;
