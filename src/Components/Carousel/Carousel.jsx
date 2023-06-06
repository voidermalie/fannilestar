import './Carousel.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';

const Carousel = () => {
  const projects = useContext(ProjectContext);
  console.log('Projects:', projects); // Add this line to check the value
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
          <article key={project.id} >
            <img src={project.imagePath} alt={project.title}/>
            <h2>{project.title}</h2>
            <p>{project.descriptionShort}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
