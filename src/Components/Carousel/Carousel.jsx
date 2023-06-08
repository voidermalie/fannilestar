import './Carousel.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Carousel = () => {
  const { language } = useContext(LanguageContext);
  const projects = useContext(ProjectContext);
  const slidesWrapperRef = useRef(null);

  const scrollSlides = () => {
    const slidesWrapper = slidesWrapperRef.current;
    const scrollDistance = slidesWrapper.offsetWidth;
    slidesWrapper.scrollLeft += scrollDistance;
  };

  return (
    <section className="slide-container">
      <div className="slide-wrapper">
        {projects.map((project) => (
          <article className="project-card" key={project.id} >
            <img className="project-image" src={project.imagePath} alt={project.title}/>
            <h3>{project.title}</h3>
            <p>{project.descriptionShort[language]}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
