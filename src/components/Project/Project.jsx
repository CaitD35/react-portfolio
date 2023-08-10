import React from 'react';
import './Project.css';

function Project({ title, imageSrc, liveLink, githubLink }) {
  return (
    <div className="project">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} />
      </a>
      <h3>{title}</h3>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}


export default Project;


