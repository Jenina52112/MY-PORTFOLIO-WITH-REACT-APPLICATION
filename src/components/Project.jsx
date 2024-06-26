// src/components/Project.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

function Project({ title, imageUrl, liveUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default Project;
