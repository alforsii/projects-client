import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../auth/actions/projectActions';
import projectsStyle from './Projects.module.scss';

import SearchInput from './SearchInput';

export const Projects = ({ projects, getProjects }) => {
  const [columns, setColumns] = useState('col-md-3');
  useEffect(() => {
    getProjects();
  }, []);
  const handleColumnSize = ({ target: { value } }) => {
    if (value === '3') {
      setColumns('col-md-3');
    } else if (value === '6') {
      setColumns('col-md-6');
    } else if (value === '12') {
      setColumns('col-md-12');
    }
  };
  return (
    <div className={`${projectsStyle.main}`}>
      <div style={{ maxWidth: '700px' }}>
        <SearchInput projects={projects} />
        <label>Select size</label>
        <select
          onChange={handleColumnSize}
          className="custom-select"
          id="inputGroupSelect02"
        >
          <option value="3">Small</option>
          <option value="6">Medium</option>
          <option value="12">Large</option>
        </select>
      </div>
      {/* <button onClick={getProjects}>Get_Projects</button> */}
      <div className={`${projectsStyle.rows} row m-1`}>
        {projects.map((project) => {
          const imageUrl = project.imgUrl
            ? project.imgUrl
            : `${project.imgPath}${project.imgName}.${project.ext}`;
          return (
            <div
              className={`card ${columns} ${projectsStyle.card} p-1`}
              key={project._id}
            >
              <img
                src={imageUrl}
                className="card-img-top"
                alt={project.imgName}
              />
              <div className="card-body">
                <p className="text-muted">Type: {project.type}</p>
                <h5>
                  <a
                    href={
                      project.path.includes('https://')
                        ? project.path
                        : `${project.domain}${project.path}`
                    }
                  >
                    {project.name}
                  </a>
                </h5>

                <p className="text-muted">
                  Completed: {project.completed ? 'true' : 'false'}
                </p>
                <p className="text-muted">{project.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href={
                      project.path.includes('https://')
                        ? project.path
                        : `${project.domain}${project.path}`
                    }
                    className="nav-link"
                  >
                    More details
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
});
const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
