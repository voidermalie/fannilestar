import './ProjectPopup.css';
import { ProjectContext } from '../../contexts/ProjectContext';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

function ProjectPopup({ onClose }) {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();

  const projects = useContext(ProjectContext);

  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    if (!project) {
      navigate('/404');
      return;
    }
    setProject(project);
  }, [id, projects, navigate]);

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
          />
        </div>
        <div>
          <p>{project.descriptionLong[language]}</p>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </section>
  );
}

export default ProjectPopup;
