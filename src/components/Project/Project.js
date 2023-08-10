import React from 'react';
import './Project.css';

function Project({ data }) {
    return (
        <div className="project-card">
            <img src={data.imgSrc} alt={data.title} className="project-image" />
            <h3>{data.title}</h3>
            <div className="project-links">
                <a href={data.deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
                <a href={data.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}

export default Project;



