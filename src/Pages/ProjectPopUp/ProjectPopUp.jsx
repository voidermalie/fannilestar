import './ProjectPopup.css';
import { ProjectContext } from '../../contexts/ProjectContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useState, useEffect } from 'react';

const ProjectPopup = ({ id, onClose }) => {
  const language = useContext(LanguageContext);
  const projects = useContext(ProjectContext);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === id);
    if (!foundProject) {
      onClose(); // Close the popup if the project is not found
      return;
    }
    setProject(foundProject);
  }, [projects, id, onClose]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className="project-content">
      <div className="project-container">
        <div>
          <img
            className="project-image project-image-project-page"
            src={project.imagePath}
            alt={project.title}
          />
        </div>
        <div className="project-infos">
          <h2>{project.title}</h2>
          <p>{project.descriptionShort[language]}</p>
          <p>{project.descriptionLong[language]}</p>
        </div>
      </div>
      <button className="close-button">X</button>
    </section>
  );
};

export default ProjectPopup;
