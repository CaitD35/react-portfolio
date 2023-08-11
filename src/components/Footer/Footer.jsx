import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className = "footer">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      
      <div className="footer-contact">
        <p>Phone: 267-701-7204</p>
        <p>Email: <a href="mailto:cdonahue8749@gmail.com">cdonahue8749@gmail.com</a></p>
      </div>
    </footer>
  );
}


export default Footer;
