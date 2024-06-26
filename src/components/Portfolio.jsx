import React from 'react';
import Project from './Project';

const projects = [
  { title: 'Project 1', deployedLink: 'https://deployed1.com', repoLink: 'https://github.com/repo1' },
  { title: 'Project 2', deployedLink: 'https://deployed2.com', repoLink: 'https://github.com/repo2' },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;