// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    title: 'MERN Application',
    imageUrl: '../../meowmarket.png',
    liveUrl: 'https://group-fivemeowmarket-c7eee0758978.herokuapp.com/',
    repoUrl: 'https://github.com/eepitsporsche/meow_market',
  },
  {
    title: 'Weather Dashboard App',
    imageUrl: '../../image copy 2.png',
    liveUrl: 'https://jenina52112.github.io/Weather-Dashboard-API-Challenge/',
    repoUrl: 'https://github.com/Jenina52112/Weather-Dashboard-API-Challenge',
  },
  {
    title: 'Work Day Scheduler',
    imageUrl: '../../image copy 3.png',
    liveUrl: 'https://jenina52112.github.io/WORK-DAY-SCHEDULER-CHALLENGE/',
    repoUrl: 'https://github.com/Jenina52112/WORK-DAY-SCHEDULER-CHALLENGE',
  },
  {
    title: 'Password Generator',
    imageUrl: '../../image copy 4.png',
    liveUrl: 'https://jenina52112.github.io/JAVASCRIPT-PASSWORD-GENERATOR-CHALLENGE/',
    repoUrl: 'https://github.com/Jenina52112/JAVASCRIPT-PASSWORD-GENERATOR-CHALLENGE',
  },
  {
    title: 'Timed Quiz Challenge',
    imageUrl: '../../image copy 6.png',
    liveUrl: 'https://jenina52112.github.io/NEW-TIMED-QUIZ-CHALLENGE/',
    repoUrl: 'https://github.com/Jenina52112/NEW-TIMED-QUIZ-CHALLENGE',
  },
  {
    title: 'Node Employee Tracker',
    imageUrl: '../../employeetracker.png',
    liveUrl: 'https://www.youtube.com/watch?v=BbtnuEKsrL0',
    repoUrl: 'https://github.com/Jenina52112/Employee-Tracker-Challenge',
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Works</h2>
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
