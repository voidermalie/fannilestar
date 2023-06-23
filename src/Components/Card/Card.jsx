import './Card.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Card = ({ project, onClick, onLoad }) => {
  const { language } = useContext(LanguageContext); // Access language from the LanguageContext value object

  return (
    <article className="project-card" key={project.id} onClick={onClick}>
      <div className="image-container">
        <img
          className="project-image"
          src={project.imagePath}
          alt={project.title}
          onLoad={onLoad}
        />
      </div>
      <h3>{project.title}</h3>
      <p>{project.descriptionShort[language]}</p>
    </article>
  );
};
export default Card;
