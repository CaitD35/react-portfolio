import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

function Portfolio() {
    
    const projects = [
        { title: "Workout Tracker", imgSrc: "./images/workouttracker.png", deployedLink: "https://workout-plus-c7901a67a230.herokuapp.com", githubLink: "https://github.com/Lalu423/workout-tracker.git " },
        { title: "Activity Roulette", imgSrc: "./images/AR_project.png", deployedLink: "https://sarroyo551.github.io/Activity-Roulette/", githubLink: "https://github.com/sarroyo551/Activity-Roulette.git" },
        { title: "Horiseon Refactor", imgSrc: "./images/hr.png", deployedLink: "https://caitd35.github.io/horiseon-refactor-/", githubLink: "https://github.com/CaitD35/horiseon-refactor-.git" }, 
        { title: "Pre-work Study Guide", imgSrc: "./images/pr.png", deployedLink: "https://caitd35.github.io/prework-study-guide/", githubLink: "https://github.com/CaitD35/prework-study-guide.git" },   
        { title: "PWA Text Editor", imgSrc: "./images/jate1.png", deployedLink: "https://pwa-text-editor-jate1-0f3b37308728.herokuapp.com", githubLink: "https://github.com/CaitD35/PWA-text-editor.git"},
        { title: "Password Generator", imgSrc: "./images/pwg.png", deployedLink: "https://caitd35.github.io/password-generator/", githubLink: "https://github.com/CaitD35/password-generator.git"},
        { title: "SpaceXplorer", imgSrc: './images/spacex.gif', deployedLink: 'https://spacexplorer-10-24f419ee8790.herokuapp.com/', githubLink: 'https://github.com/CaitD35/spaceXplorer.git'},
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
