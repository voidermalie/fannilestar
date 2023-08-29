import './Carousel.css';
import { useContext, useState, useEffect, Fragment } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
import NextButton from '../../assets/icons/next.svg';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';
import Modal from '../../Components/Modal/Modal';
import { LanguageContext } from '../../contexts/LanguageContext';

const Carousel = () => {
  const originalProjects = useContext(ProjectContext);

  const { language } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(originalProjects);
  }, [originalProjects]);

  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    setProjectId(id);
  };

  const scrollToNext = () => {
    setProjects((prevProjects) => {
      const firstProject = prevProjects[0];
      const remainingProjects = prevProjects.slice(1);
      return [...remainingProjects, firstProject];
    });
  };

  const scrollToPrevious = () => {
    setProjects((prevProjects) => {
      const lastProject = prevProjects[prevProjects.length - 1];
      const remainingProjects = prevProjects.slice(0, prevProjects.length - 1);
      return [lastProject, ...remainingProjects];
    });
  };

  return (
    <section className="carousel">
      <h2 id="projects-title">{language === 'fr' ? 'Mes projets' : 'My projects'}</h2>
      <div className="slide-container">
      <button
        id="prev-button"
        className="slide-button"
        onClick={scrollToPrevious}
      >
        <img src={PrevButton} alt="Précédent" />
      </button>
      <div className="slide-wrapper">
        {projects.map((project) => (
          <Fragment key={project.id}>
            <Card project={project} onClick={() => togglePopup(project.id)} />
            {isOpen && projectId === project.id && (
              <Modal id={project.id} setIsOpen={setIsOpen} />
            )}
          </Fragment>
        ))}
      </div>
      <button id="next-button" className="slide-button" onClick={scrollToNext}>
        <img src={NextButton} alt="Suivant" />
      </button>
    </div>
    </section>
  );
};

export default Carousel;
