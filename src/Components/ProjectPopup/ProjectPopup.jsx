import './ProjectPopup.css';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useState, useEffect } from 'react';

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

  return (
    <section className="popup-background">
      <button
        className="close-button"
        type="button"
        aria-label="fermer"
        onClick={() => setIsOpen(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="project-container">
        <header>
          <h2 className='popup-title'>{project.title}</h2>
        </header>
        <section className='project-body'>
        <div>
          <img
            className="project-image project-image-project-page"
            src={project.imagePath}
            alt={project.title}
          />
        </div>
        <div className="project-infos">
          <p>{project.descriptionShort[language]}</p>
          <p>{project.descriptionLong[language]}</p>
        </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectPopup;
