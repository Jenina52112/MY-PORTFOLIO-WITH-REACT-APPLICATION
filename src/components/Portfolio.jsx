// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    title: 'Project 1',
    imageUrl: 'path/to/project1.jpg',
    liveUrl: 'https://live-demo1.com',
    repoUrl: 'https://github.com/your-profile/project1',
  },
  {
    title: 'Project 2',
    imageUrl: 'path/to/project2.jpg',
    liveUrl: 'https://live-demo2.com',
    repoUrl: 'https://github.com/your-profile/project2',
  },
  {
    title: 'Project 3',
    imageUrl: 'path/to/project3.jpg',
    liveUrl: 'https://live-demo3.com',
    repoUrl: 'https://github.com/your-profile/project3',
  },
  {
    title: 'Project 4',
    imageUrl: 'path/to/project4.jpg',
    liveUrl: 'https://live-demo4.com',
    repoUrl: 'https://github.com/your-profile/project4',
  },
  {
    title: 'Project 5',
    imageUrl: 'path/to/project5.jpg',
    liveUrl: 'https://live-demo5.com',
    repoUrl: 'https://github.com/your-profile/project5',
  },
  {
    title: 'Project 6',
    imageUrl: 'path/to/project6.jpg',
    liveUrl: 'https://live-demo6.com',
    repoUrl: 'https://github.com/your-profile/project6',
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


// { title: 'CMS Style Blog Site', deployedLink: 'https://cms-style-blog-site-18a70dcd692d.herokuapp.com', repoLink: 'https://github.com/Jenina52112/CMS-Style-Blog-Site-Challenge' },
