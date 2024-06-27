// src/components/Resume.jsx
import React from 'react';
import './Resume.css'

const items = ['HTML', 'CSS', 'Javascript', 'MySql', 'MongoDb', 'Express', 'React',
  'Node'
];
const listItems = items.map(item => <li>{item}</li>);


function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resumeDiv">
        <h3>My Proficiencies</h3>
        <ul className="resumeUl">
          {listItems}
        </ul>
      <a className="resumeA" href="../../public/resume.pdf" download>Download Resume</a>

      </div>
    </section>
  );
}

export default Resume;
