// src/components/Resume.jsx
import React from 'react';
import './Resume.css'

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resumeDiv">
        <h3>My Proficiencies</h3>
        <ul className="resumeUl">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>MySql</li>
          <li>MongoDb</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      <a className="resumeA" href="../../public/resume.pdf" download>Download Resume</a>

      </div>
    </section>
  );
}

export default Resume;
