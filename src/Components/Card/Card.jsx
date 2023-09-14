import './Card.css';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Card = ({ project, onClick }) => {
  const { language } = useContext(LanguageContext); // Access language from the LanguageContext value object

  return (
    <article
      className="project-card"
      key={project.id}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick(); // Call the onClick function when the "Enter" key is pressed
        }
      }}
      role="article"
      aria-label={project.title}
      tabIndex={0}
    >
      <div className="image-container">
        <img
          className="project-image"
          src={project.imagePath}
          alt={project.title}
        />
      </div>
      <h2 className='project-title'>{project.title}</h2>
      <p>{project.descriptionShort[language]}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </article>
  );
};
export default Card;
