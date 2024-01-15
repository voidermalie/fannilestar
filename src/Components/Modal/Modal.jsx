import './Modal.css';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useEffect } from 'react';

import MimicOctopus from '../../assets/mimic_octopus.gif';

const ModalLinks = ({ githubLink, videoDemo, liveDemo }) => (
  <div className="project-links">
    <a href={githubLink} target="_blank" rel="noreferrer">
      GitHub
    </a>
    {videoDemo ? (
      <a href={videoDemo} target="_blank" rel="noreferrer">
        Video Demo
      </a>
    ) : liveDemo ? (
      <a href={liveDemo} target="_blank" rel="noreferrer">
        Live Demo
      </a>
    ) : null}
  </div>
);

const Modal = ({ id, setIsOpen }) => {
  const { language } = useContext(LanguageContext);
  const projects = useContext(ProjectContext);
  const project = projects.find((project) => project.id === id);

  const closeButtonTitleText = language === 'fr' ? 'Fermer' : 'Close';
  const closeButtonAriaLabel = language === 'fr' ? 'Fermer' : 'Close';

  // Add useEffect to handle the scroll behavior
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the background content
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling when the component is unmounted
    };
  }, []);

  return (
    <div id="popup-wrapper">
      <section className="popup-background">
        <div className="project-container">
          <header className="popup-header">
            <h2 className="popup-title">{project.title}</h2>
            <p>{project.descriptionShort[language]}</p>
          </header>
          <section className="project-body">
            <div className="project-content">
              <div>
                <h3>{language === 'fr' ? 'Caractéristiques' : 'Highlights'}</h3>
                <ul className="features-list">
                  {project &&
                    project.descriptionLong[language] &&
                    project.descriptionLong[language].map((item) => (
                      <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
              </div>
            </div>
            <ModalLinks
              githubLink={project.githubLink}
              videoDemo={project.videoDemo}
              liveDemo={project.liveDemo}
            />
            <div id="mimic-octopus">
              <img
                src={MimicOctopus}
                alt={language === 'fr' ? 'Pieuvre mimétique' : 'Mimic Octopus'}
                className="sea-gif"
              />
            </div>
          </section>
        </div>
        <button
          className="close-button"
          title={closeButtonTitleText}
          type="button"
          aria-label={closeButtonAriaLabel}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>
    </div>
  );
};

export default Modal;
