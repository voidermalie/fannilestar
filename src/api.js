import projects from '../projects.json';

const fetchProjects = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(projects);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

export default fetchProjects;