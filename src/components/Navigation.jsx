// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li key={section}>
            <NavLink
              to={`/${section.toLowerCase().replace(/ /g, '-')}`}
              activeclassname="active"
            >
              {section}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
