import './Caroussel.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); //index initialisé à 0
  const [currentSlide, setCurrentSlide] = useState(0); //gère le counter

  const totalSlides = slides.length;

  const prevButton = <FontAwesomeIcon icon={faChevronLeft} />;
  const nextButton = <FontAwesomeIcon icon={faChevronRight} />;

  
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  /*counter slide =>
  change si l'index change =>
  prend la valeur de currentIndex (+1 = pour pas être basé à 0)*/
  useEffect(() => {
    setCurrentSlide(currentIndex + 1);
  }, [currentIndex]);

  return (
    <article className="slide-container">
      <div className="image-container">
        <img src={`${slides[currentIndex]}`} alt="" key={currentIndex} />
      </div>
      {totalSlides > 1 && ( //boutons s'affichent uniquement si + d'une images
        <div className="slide-infos">
          <div className="slide-buttons">
            <button className="prev-button" onClick={handlePrev}>
              {prevButton}
            </button>
            <button className="next-button" onClick={handleNext}>
              {nextButton}
            </button>
          </div>
          <div className="container-slide-numbers">
            <p className="slide-numbers">{`${currentSlide}/${totalSlides}`}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default Caroussel;