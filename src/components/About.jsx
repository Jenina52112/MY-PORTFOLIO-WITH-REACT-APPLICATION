import React from "react";
import "./About.css"

function About() {
  return (
    <section className="aboutSection">
      <h2>About Me</h2>
      <div className="contentWrapper">
        <img src="../public/image.png" alt="Developer" className="aboutImage" />
        <div className="textWrapper">
          <p>Hello! I am Jenina dela Cruz, a current student in UCB Bootcamp for full-stack Web Development.
            I love creating things and solving problems. That's what got me interested in coding. I am also looking 
            for a career switch and aiming for home-based work which will give me more time to spend with kids.
          </p>
        </div>
      </div>
    </section>
  );
}

  
  export default About;