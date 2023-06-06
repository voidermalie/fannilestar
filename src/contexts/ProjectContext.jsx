import { createContext, useState, useEffect } from 'react';
import fetchProjects from '../api';
import PropTypes from 'prop-types';

export const ProjectContext = createContext([]);

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectProvider;