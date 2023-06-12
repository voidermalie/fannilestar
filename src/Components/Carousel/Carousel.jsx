import './Carousel.css';
import { useContext, useRef, useEffect, useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import PrevButton from '../../assets/icons/previous.svg';
import NextButton from '../../assets/icons/next.svg';

const Carousel = () => {
  const { language } = useContext(LanguageContext);
  const projects = useContext(ProjectContext);

  const slidesWrapperRef = useRef(null);

  return (
    <section className="slide-container">
            <button id="prev-button">
        <img src={PrevButton} alt="Précédent" />
      </button>
      <div className="slide-wrapper" ref={slidesWrapperRef}>
        {projects.map((project) => (
          <a href="#" className="project-card" key={project.id}>
            <article>
              <img
                className="project-image"
                src={project.imagePath}
                alt={project.title}
              />
              <h3>{project.title}</h3>
              <p>{project.descriptionShort[language]}</p>
            </article>
          </a>
        ))}
      </div>
      <button id="next-button">
        <img src={NextButton} alt="Suivant" />
      </button>
    </section>
  );
};

export default Carousel;