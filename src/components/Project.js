import React from 'react';

const Project = (props) => {

  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    <div>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a> 
    <a href={github} target="_blank" rel="noopener noreferrer">View Code</a>
</div>
    </div>
  );
}

export default Project;
