import './Card.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Card = ({ project }) => {
  const { language } = useContext(LanguageContext); // Access language from the LanguageContext value object
  return (
        <div className="project-card" key={project.id}>
        <article>
          <img
            className="project-image"
            src={project.imagePath}
            alt={project.title}
          />
          <h3>{project.title}</h3>
          <p>{project.descriptionShort[language]}</p>
        </article>
        </div>
      )
};
export default Card;