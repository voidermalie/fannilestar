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
    <section className="project-content">
      <button className="close-button" onClick={() => setIsOpen(false)}>
        X
      </button>
      <div className="project-container">
        <div>
          <img
            className="project-image project-image-project-page"
            src={project.imagePath}
            alt={project.title}
          />
        </div>
        <div className="project-infos">
          <h2>{project.title}</h2>
          <p>{project.descriptionShort[language]}</p>
          <p>{project.descriptionLong[language]}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPopup;
