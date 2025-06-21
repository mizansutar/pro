import React from 'react';
import './ProjectBoxes.css';
import Model2 from './Model2';

const projects = [
  {
    title: 'ONAC Project',
    description: 'A next-gen social + e-commerce hybrid platform with ML-driven content ranking.',
    image: '/images/onac.png',
    featured: true,
  },
  {
    title: 'NPM Chatbot',
    description: 'A custom Node.js chatbot package with command parsing and multi-platform logic.',
    image: '/images/npl.png',
  },
  {
    title: 'DL Image Generator',
    description: 'A deep learning-powered image generator using GANs and custom datasets.',
    image: '/images/dl.png',
    stacked: true,
  }
];


const ProjectBoxes = ({ isMoon }) => {
  return (
    <section
      className={`project-showcase-wrapper ${isMoon ? 'moon-mode-bg' : 'sun-mode-bg'}`}
      id='projects'
    >
     

      <div className="project-column">
        <div className="project-grid">
          {projects.map((project, i) => (
            <div
              className={`project-card
                ${project.featured ? 'featured-project-card' : ''}
                ${project.stacked ? 'stacked' : ''}`}
              key={i}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="model-column">
        <Model2 isMoon={isMoon} />
      </div>
    </section>
  );
};


export default ProjectBoxes;
