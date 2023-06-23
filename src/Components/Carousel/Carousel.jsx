/*import './Carousel.css';
import { useContext, useRef, useState } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
//import PrevButton from '../../assets/icons/prev3.png';
import NextButton from '../../assets/icons/next.svg';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';
import ProjectPopup from '../ProjectPopup/ProjectPopup';

const Carousel = () => {
  const projects = useContext(ProjectContext);
  const totalSlides = projects.length;

  
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
      <button id="prev-button" className='slide-button' onClick={scrollToPrevious}>
        <img src={PrevButton} alt="Précédent" />
      </button>
      <div className="slide-wrapper" ref={slidesWrapperRef}>
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
      </div>
      <button id="next-button" className='slide-button' onClick={scrollToNext}>
        <img src={NextButton} alt="Suivant" />
      </button>
    </section>
  );
};

export default Carousel;*/

import './Carousel.css';
import { useContext, useRef, useState, useEffect } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
//import PrevButton from '../../assets/icons/prev3.png';
import NextButton from '../../assets/icons/next.svg';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';
import ProjectPopup from '../ProjectPopup/ProjectPopup';

const Carousel = () => {
  const projects = useContext(ProjectContext);

  const tripleProjects = [...projects, ...projects, ...projects];

  const totalSlides = projects.length;

  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null); // Add projectId state

  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    setProjectId(id); // Set the clicked projectId
  };

  const slideWrapper = useRef(null);

  const scrollToNext = () => {
    if (slideWrapper.current) {
      slideWrapper.current.scrollLeft += slideWrapper.current.offsetWidth;
      if (
        slideWrapper.current.scrollLeft >=
        slideWrapper.current.scrollWidth / 2
      ) {
        slideWrapper.current.scrollLeft = 0;
      }
    }
  };

  const scrollToPrevious = () => {
    if (slideWrapper.current) {
      slideWrapper.current.scrollLeft -= slideWrapper.current.offsetWidth;
      if (slideWrapper.current.scrollLeft <= 0) {
        slideWrapper.current.scrollLeft = slideWrapper.current.scrollWidth / 2;
      }
    }
  };

  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    // Only set the initial scroll position if all images have loaded
    if (loadedImages === tripleProjects.length) {
      slideWrapper.current.scrollLeft =
        slideWrapper.current.offsetWidth * projects.length;
    }
  }, [projects.length, loadedImages]);

  const handleScroll = () => {
    // If we've scrolled to the start of the second copy...
    if (
      slideWrapper.current.scrollLeft <=
      slideWrapper.current.scrollWidth / 3
    ) {
      // ...move to the start of the third copy
      slideWrapper.current.scrollLeft =
        (slideWrapper.current.scrollWidth / 3) * 2;
    }
    // If we've scrolled to the end of the second copy...
    else if (
      slideWrapper.current.scrollLeft >=
      (slideWrapper.current.scrollWidth / 3) * 2
    ) {
      // ...move back to the start of the second copy
      slideWrapper.current.scrollLeft = slideWrapper.current.scrollWidth / 3;
    }
  };

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const debouncedHandleScroll = debounce(handleScroll, 200);

  return (
    <section className="slide-container">
      <button
        id="prev-button"
        className="slide-button"
        onClick={scrollToPrevious}
      >
        <img src={PrevButton} alt="Précédent" />
      </button>
      <div
        className="slide-wrapper"
        ref={slideWrapper}
        onScroll={debouncedHandleScroll}
      >
        {tripleProjects.map((project) => (
          <>
            <Card
              key={project.id}
              project={project}
              onLoad={() => setLoadedImages((prev) => prev + 1)}
              onClick={() => togglePopup(project.id)}
            />
            {isOpen && projectId === project.id && (
              <ProjectPopup id={project.id} setIsOpen={setIsOpen} />
            )}
          </>
        ))}
      </div>
      <button id="next-button" className="slide-button" onClick={scrollToNext}>
        <img src={NextButton} alt="Suivant" />
      </button>
    </section>
  );
};

export default Carousel;
