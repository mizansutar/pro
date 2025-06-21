import React from 'react';
import './ProjectBoxes.css';
import Model2 from './Model2';

const projects = [
  {
    title: 'Ryde App',
    description: 'On-Demand Rides Made Simple',
    image: '/images/wp2126143-mark-zuckerberg-wallpapers.jpg',
    featured: true,
  },
  {
    title: 'Library App',
    description: 'Manage your books digitally',
    image: '/images/wp2126157-mark-zuckerberg-wallpapers.jpg',
  },
  {
    title: 'YC Showcase',
    description: 'Startup Directory with Filtering',
    image: '/images/wp8343427-anonymous-pc-wallpapers.jpg',
    stacked: true,
  },
];

const ProjectBoxes = ({ isMoon }) => {
  return (
    <section
      className={`project-showcase-wrapper ${isMoon ? 'moon-mode-bg' : 'sun-mode-bg'}`}
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
