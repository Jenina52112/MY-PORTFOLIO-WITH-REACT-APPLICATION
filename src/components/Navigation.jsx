import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ currentSection, handleSectionChange }) {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <nav>
        <ul>
          {sections.map(section => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => handleSectionChange(section)}
                className={currentSection === section ? 'active' : ''}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;