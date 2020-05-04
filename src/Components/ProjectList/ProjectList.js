import React from "react";
import { connect } from "react-redux";

const ProjectList = ({ project }) => {
  return (
    <div className="ProjectList">
      <h1>List Projects</h1>
      {project.map(({ name, type, description }, index) => (
        <div key={index}>
          <h1>{name}</h1>
          <h5>{type}</h5>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ root }) => ({ project: root.project });

export default connect(mapStateToProps)(ProjectList);
