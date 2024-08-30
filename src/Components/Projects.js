import React from 'react'
import ProjectItem from './ProjectItem';
import './Projects.css';
import { ProjectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className="content-container">
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => (
          <div key={index}>
            <ProjectItem id={index} name={project.name} image={project.image} />
            <div className='project-demo'>
              <button className="btn btn-demo">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="btn py-3 px-7 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-200">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo
                    </a>
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div> 
      <div className="footer">
      </div>
    </div>
  );
}

export default Projects;