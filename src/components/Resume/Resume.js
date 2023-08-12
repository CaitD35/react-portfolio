import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <p>
        Click the link below to download my resume.
      </p>
      <a href="./RESUME 2023.pdf" download>Download Resume</a>

      <h3>Proficiencies</h3>
      <div className="pro-text-box">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>APIs</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
        <li>Git</li>
      </ul>
      </div>
      
    </section>
  );
}

export default Resume;
