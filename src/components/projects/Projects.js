import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/projectActions';

export const Projects = ({ projects, getProjects }) => {
  return (
    <div>
      <button onClick={getProjects}>Get_Projects</button>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
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
