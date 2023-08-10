import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

function Portfolio() {
    // Sample data - replace with your projects
    const projects = [
        { title: "Project 1", imgSrc: "path-to-image1.jpg", deployedLink: "https://example1.com", githubLink: "https://github.com/you/project1" },
        // ... add other projects
    ];

    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <Project key={index} data={project} />
            ))}
        </div>
    );
}

export default Portfolio;
