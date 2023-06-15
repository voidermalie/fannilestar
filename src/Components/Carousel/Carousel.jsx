import './Carousel.css';
import { useContext, useRef, useState } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
import NextButton from '../../assets/icons/next.svg';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';
import ProjectPopup from '../ProjectPopup/ProjectPopup';

const Carousel = () => {
  const projects = useContext(ProjectContext);

  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null); // Add projectId state

  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    setProjectId(id); // Set the clicked projectId
  };

  const slidesWrapperRef = useRef(null);

  const scrollToNext = () => {
    slidesWrapperRef.current.scrollLeft += slidesWrapperRef.current.offsetWidth;
  };

  const scrollToPrevious = () => {
    slidesWrapperRef.current.scrollLeft -= slidesWrapperRef.current.offsetWidth;
  };

  return (
    <section className="slide-container">
      <div className="slide-wrapper" ref={slidesWrapperRef}>
        <button id="prev-button" onClick={scrollToPrevious}>
          <img src={PrevButton} alt="Précédent" />
        </button>

        {projects.map((project) => (
          <>
            <Card
              key={project.id}
              project={project}
              onClick={() => togglePopup(project.id)}
            />
            {isOpen && projectId === project.id && (
              <ProjectPopup id={project.id} setIsOpen={setIsOpen} />
            )}
          </>
        ))}

        <button id="next-button" onClick={scrollToNext}>
          <img src={NextButton} alt="Suivant" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
