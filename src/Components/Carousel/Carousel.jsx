import './Carousel.css';
import { useContext, useState, useEffect, Fragment } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
import NextButton from '../../assets/icons/next.svg';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';
import ProjectPopup from '../ProjectPopup/ProjectPopup';

const Carousel = () => {
  const originalProjects = useContext(ProjectContext);
  
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
    setProjects(prevProjects => {
      const firstProject = prevProjects[0];
      const remainingProjects = prevProjects.slice(1);
      return [...remainingProjects, firstProject];
    });
  };
  
  const scrollToPrevious = () => {
    setProjects(prevProjects => {
      const lastProject = prevProjects[prevProjects.length - 1];
      const remainingProjects = prevProjects.slice(0, prevProjects.length - 1);
      return [lastProject, ...remainingProjects];
    });
  };
  
  return (
    <section className="slide-container" id="carousel">
      <button id="prev-button" className="slide-button" onClick={scrollToPrevious}>
        <img src={PrevButton} alt="Précédent" />
      </button>
      <div className="slide-wrapper">
        {projects.map((project) => (
          <Fragment key={project.id}>
            <Card
              project={project}
              onClick={() => togglePopup(project.id)}
            />
            {isOpen && projectId === project.id && (
              <ProjectPopup id={project.id} setIsOpen={setIsOpen} />
            )}
          </Fragment>
        ))}
      </div>
      <button id="next-button" className="slide-button" onClick={scrollToNext}>
        <img src={NextButton} alt="Suivant" />
      </button>
    </section>
  );
};

export default Carousel;
