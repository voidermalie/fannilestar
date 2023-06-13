import './Carousel.css';
import { useContext, useRef, useState } from 'react';
import PrevButton from '../../assets/icons/previous.svg';
import NextButton from '../../assets/icons/next.svg';
//import Popup from 'reactjs-popup';
import Card from '../Card/Card';
import { ProjectContext } from '../../contexts/ProjectContext';

const Carousel = () => {
  const projects = useContext(ProjectContext);

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
            <Card key={project.id} project={project} />
          ))}

        <button id="next-button" onClick={scrollToNext}>
          <img src={NextButton} alt="Suivant" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
