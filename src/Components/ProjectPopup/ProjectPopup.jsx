import './ProjectPopup.css';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useState, useEffect, useRef } from 'react';

import MimicOctopus from '../../assets/mimic_octopus.gif'

const ProjectPopup = ({ id, setIsOpen }) => {
  const { language } = useContext(LanguageContext);
  const projects = useContext(ProjectContext);
  const project = projects.find((project) => project.id === id);

  // Add useEffect to handle the scroll behavior
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the background content
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling when the component is unmounted
    };
  }, []);

  const navLinkRef = useRef();


  return (
    <section className="popup-background">
      <button
        className="close-button"
        type="button"
        aria-label="fermer"
        onClick={() => {
          setIsOpen(false);
        navLinkRef.current.focus()}}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="project-container">
        <header className='popup-header'>
          <h2 className='popup-title'>{project.title}</h2>
          <p>{project.descriptionShort[language]}</p>
        </header>
        <section className='project-body'>
        <div className='project-content'>
          <div>
            <h3>{language === 'fr' ? 'Fonctionnalités' : 'Features'}</h3>
            <ul className='features-list'>
              {project.descriptionLong[language].map(item => <li key={item.id}>{item.text}</li>)}
            </ul>
          </div>
        </div>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
        </div>
        <div>
        <img src={MimicOctopus} alt="Pieuvre mimétique" className="sea-gif"></img>
        </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectPopup;
