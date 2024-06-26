// src/components/Project.jsx
import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
}

export default Project;

