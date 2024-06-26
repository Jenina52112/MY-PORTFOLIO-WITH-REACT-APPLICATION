import React from 'react';
import Navigation from './Navigation';

function Header({ currentSection, handleSectionChange }) {
    return (
      <header>
        <h1>Jenina dela Cruz Pisigan</h1>
        <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange} />
      </header>
    );
  }
  
  export default Header;