import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

function Portfolio() {
    
    const projects = [
        { title: "Workout Tracker", imgSrc: "./images/workouttracker.png", deployedLink: "https://workout-plus-c7901a67a230.herokuapp.com", githubLink: "https://github.com/Lalu423/workout-tracker.git " },
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
